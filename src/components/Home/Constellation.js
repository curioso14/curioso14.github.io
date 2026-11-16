import React, { useEffect, useRef } from "react";

// Una red neuronal dibujada como constelación: nodos = estrellas, pulsos = señales.
const LAYERS = [4, 6, 7, 6, 3];

function Constellation() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf, W, H, dpr;
    let nodes = [], edges = [], pulses = [], dust = [];

    // Pseudoaleatorio con semilla para que la "constelación" sea siempre la misma
    let seed = 14;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

    function build() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed = 14;
      nodes = []; edges = []; pulses = [];
      const padX = W * 0.1, padY = H * 0.12;
      LAYERS.forEach((n, li) => {
        const x = padX + (li * (W - 2 * padX)) / (LAYERS.length - 1);
        for (let i = 0; i < n; i++) {
          const y = padY + ((i + 0.5) * (H - 2 * padY)) / n;
          nodes.push({
            x: x + (rnd() - 0.5) * W * 0.06,
            y: y + (rnd() - 0.5) * H * 0.06,
            layer: li,
            r: 1.6 + rnd() * 2.2,
            phase: rnd() * Math.PI * 2,
            speed: 0.6 + rnd() * 1.2,
          });
        }
      });
      nodes.forEach((a, ai) =>
        nodes.forEach((b, bi) => {
          if (b.layer === a.layer + 1 && rnd() < 0.55) edges.push([ai, bi]);
        })
      );
      dust = Array.from({ length: Math.round((W * H) / 2500) }, () => ({
        x: rnd() * W, y: rnd() * H, r: rnd() * 0.9 + 0.2, p: rnd() * 6.28,
      }));
    }

    function spawn() {
      const starts = edges.filter(([a]) => nodes[a].layer === 0);
      const e = starts[Math.floor(Math.random() * starts.length)];
      if (e) pulses.push({ e, t: 0 });
    }

    let last = 0, acc = 0;
    function frame(ts) {
      const dt = Math.min((ts - last) / 1000 || 0, 0.05);
      last = ts;
      const time = ts / 1000;
      ctx.clearRect(0, 0, W, H);

      dust.forEach((d) => {
        ctx.globalAlpha = 0.25 + 0.25 * Math.sin(time * 0.8 + d.p);
        ctx.fillStyle = "#cbd5e1";
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, 6.28); ctx.fill();
      });

      ctx.lineWidth = 0.7;
      edges.forEach(([a, b]) => {
        const A = nodes[a], B = nodes[b];
        ctx.globalAlpha = 0.13;
        ctx.strokeStyle = "#7dd3fc";
        ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
      });

      if (!reduce) {
        acc += dt;
        if (acc > 0.18) { acc = 0; spawn(); }
        const next = [];
        pulses.forEach((p) => {
          p.t += dt * 1.1;
          const A = nodes[p.e[0]], B = nodes[p.e[1]];
          if (p.t >= 1) {
            B.flash = 1;
            const outs = edges.filter(([a]) => a === p.e[1]);
            if (outs.length && Math.random() < 0.85) next.push({ e: outs[Math.floor(Math.random() * outs.length)], t: 0 });
            return;
          }
          const x = A.x + (B.x - A.x) * p.t, y = A.y + (B.y - A.y) * p.t;
          ctx.globalAlpha = 0.35;
          ctx.strokeStyle = "#2dd4bf"; ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(x, y); ctx.stroke();
          ctx.globalAlpha = 1; ctx.fillStyle = "#5eead4";
          ctx.beginPath(); ctx.arc(x, y, 1.8, 0, 6.28); ctx.fill();
          next.push(p);
        });
        pulses = next.slice(-120);
      }

      nodes.forEach((n) => {
        const tw = 0.65 + 0.35 * Math.sin(time * n.speed + n.phase);
        const f = n.flash || 0;
        const R = n.r * (1 + 0.6 * f);
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, R * 7);
        g.addColorStop(0, `rgba(94,234,212,${0.35 * tw + 0.4 * f})`);
        g.addColorStop(1, "rgba(94,234,212,0)");
        ctx.globalAlpha = 1; ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(n.x, n.y, R * 7, 0, 6.28); ctx.fill();
        ctx.fillStyle = f > 0.05 ? "#ffffff" : "#e0f2fe";
        ctx.globalAlpha = 0.7 + 0.3 * tw;
        ctx.beginPath(); ctx.arc(n.x, n.y, R, 0, 6.28); ctx.fill();
        // destello en cruz, como estrella
        ctx.globalAlpha = 0.25 * tw + 0.5 * f;
        ctx.strokeStyle = "#e0f2fe"; ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(n.x - R * 3.2, n.y); ctx.lineTo(n.x + R * 3.2, n.y);
        ctx.moveTo(n.x, n.y - R * 3.2); ctx.lineTo(n.x, n.y + R * 3.2);
        ctx.stroke();
        n.flash = Math.max(0, f - dt * 2.5);
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }

    build();
    raf = requestAnimationFrame(frame);
    const ro = new ResizeObserver(build);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className="constellation" aria-hidden="true" />;
}

export default Constellation;
