import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      Desarrollador por José Manuel García{" "}
      <div className={style.social}>
        <img src="/icon-github.svg" alt="github icon" />
        <img src="/icon-github.svg" alt="github icon" />
        <img src="/icon-github.svg" alt="github icon" />
      </div>
    </footer>
  );
}

export default Footer;
