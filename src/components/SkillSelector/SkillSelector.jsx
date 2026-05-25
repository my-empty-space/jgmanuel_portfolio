"use client";
import { useState } from "react";
import style from "./SkillSelector.module.css";

function SkillSelector() {
  const [imgUrl, setImgUrl] = useState("/html.svg");

  return (
    <div className={style.wrapper}>
      <div className={style.list}>
        <span
          className={imgUrl == "/html.svg" ? style.selected : ""}
          onClick={() => setImgUrl("/html.svg")}
        >
          <img src="/html.svg" alt="" /> HTML
        </span>

        <span
          className={imgUrl == "/css.svg" ? style.selected : ""}
          onClick={() => setImgUrl("/css.svg")}
        >
          <img src="/css.svg" alt="" /> CSS
        </span>

        <span
          className={imgUrl == "/js.svg" ? style.selected : ""}
          onClick={() => setImgUrl("/js.svg")}
        >
          <img src="/js.svg" alt="" /> JavaScript
        </span>

        <span
          className={imgUrl == "/react2.svg" ? style.selected : ""}
          onClick={() => setImgUrl("/react2.svg")}
        >
          <img src="/react2.svg" alt="" /> React
        </span>

        <span
          className={imgUrl == "/nextjs.svg" ? style.selected : ""}
          onClick={() => setImgUrl("/nextjs.svg")}
        >
          <img src="/nextjs.svg" alt="" /> React
        </span>

        <span
          className={imgUrl == "/node.svg" ? style.selected : ""}
          onClick={() => setImgUrl("/node.svg")}
        >
          <img src="/node.svg" alt="" /> Node.js
        </span>

        <span
          className={imgUrl == "/git-alt.svg" ? style.selected : ""}
          onClick={() => setImgUrl("/git-alt.svg")}
        >
          <img src="/git-alt.svg" alt="" /> Git
        </span>

        <span
          className={imgUrl == "/wordpress.svg" ? style.selected : ""}
          onClick={() => setImgUrl("/wordpress.svg")}
        >
          <img src="/wordpress.svg" alt="" /> Wordpress
        </span>
      </div>

      <div className={style.bigImage}>
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
}

export default SkillSelector;
