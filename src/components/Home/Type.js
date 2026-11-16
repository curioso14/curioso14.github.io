import React from "react";
import Typewriter from "typewriter-effect";
import { useLang } from "../../i18n";

function Type() {
  const { lang, t } = useLang();
  return (
    <Typewriter
      key={lang}
      options={{ strings: t.typewriter, autoStart: true, loop: true, deleteSpeed: 40 }}
    />
  );
}

export default Type;
