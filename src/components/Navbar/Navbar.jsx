import style from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={style.header}>
      <div className="container">
        <a href="/">
          <img className={style.logo} src="/logov2.svg" alt="" />
        </a>

        <input className={style.input} type="checkbox" id="a" />
        <label htmlFor="a" className={style.mobileBtn}></label>

        <nav className={style.navbar}>
          <a href="#experience">
            <span>#</span>Experiencia
          </a>
          <a href="#projects">
            <span>#</span>Proyectos
          </a>
          <a href="#skills">
            <span>#</span>Habilidades
          </a>
          <a href="#about">
            <span>#</span>Sobre mi
          </a>
          <a href="#contact">
            <span>#</span>Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
