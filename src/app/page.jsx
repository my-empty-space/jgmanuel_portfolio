import "./home.css";
import Twins from "../components/ascii-logos/Twins";
import Manaure from "../components/ascii-logos/Manaure";
import Animall from "../components/ascii-logos/Animall";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SkillSelector from "../components/SkillSelector/SkillSelector";

// todo: colocar en el hero mi logo como fondo
// todo: colocar un botón para bajar en el hero
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero_text">
            <h1>José Manuel García Díaz</h1>
            <h2 className="text-glow--primary">desarrollador web</h2>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
              ipsa.
            </p>
          </div>

          <div className="hero_images">
            <img src="/me1.webp" alt="" />
            <span className="hero_looking-job">Soy el más pro</span>
          </div>
        </div>
      </section>

      <section id="experience" className="experiences">
        <div className="container">
          <div className="section-title">
            <span></span>
            <h2>Experiencias destacadas</h2>
            <span></span>
          </div>

          <div className="terminal">
            <div className="terminal_top-frame">
              <div className="terminal_buttons">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>Terminal</h3>
            </div>

            <div className="terminal_content">
              <p className="terminal_input">
                <span className="terminal_input--p1">~/Desktop</span>
                <span className="terminal_input--p2"> main</span>
                <span className="terminal_input--p3">git</span> pull
                featured-experience main
              </p>

              <div className="xp">
                <div className="xp_text">
                  <p>
                    <span>Proyect Name:</span> Twins Concrete <br />
                    <span>Demo Url:</span> https://tctwinconcrete.com/
                  </p>

                  <p>
                    Solor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore e t dolore mas na aliqua. Sed
                    pulvinar proin gravida hendrerit lectus a. Porta lorem
                    mollis aliquam ut porttitor leo. Magna sit amet purus
                    gravida quis blandit turpis. Vel eros donec
                  </p>
                </div>

                <Twins />
              </div>

              <div className="xp">
                <div className="xp_text">
                  <p>
                    <span>Proyect Name:</span> Twins Concrete <br />
                    <span>Demo Url:</span> https://tctwinconcrete.com/
                  </p>

                  <p>
                    Solor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore e t dolore mas na aliqua. Sed
                    pulvinar proin gravida hendrerit lectus a. Porta lorem
                    mollis aliquam ut porttitor leo. Magna sit amet purus
                    gravida quis blandit turpis. Vel eros donec
                  </p>
                </div>

                <Manaure />
              </div>

              <div className="xp">
                <div className="xp_text">
                  <p>
                    <span>Proyect Name:</span> Twins Concrete <br />
                    <span>Demo Url:</span> https://tctwinconcrete.com/
                  </p>

                  <p>
                    Solor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore e t dolore mas na aliqua. Sed
                    pulvinar proin gravida hendrerit lectus a. Porta lorem
                    mollis aliquam ut porttitor leo. Magna sit amet purus
                    gravida quis blandit turpis. Vel eros donec
                  </p>
                </div>

                <Animall />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <div className="section-title section-title--left">
            <h2>Proyectos personales</h2>
            <span></span>
          </div>

          <span className="projects_subtitle">
            <span className="text-glow--primary">getProjects</span> &#40;&#41;
            &#123;
          </span>
          <div className="projects-grid">
            <ProjectCard
              title="ChertNodes"
              imgUrl="/me1.webp"
              technologies={["Node", "Next.Js"]}
              projectUrl="https://cinemultimediaflix.com"
              githubUrl="https://github.com/"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              eius aliquid similique voluptates alias accusantium, pariatur
              deserunt ea quibusdam? Quam in ea sed praesentium officiis nemo
              consequuntur. Id, sapiente voluptate.
            </ProjectCard>

            <ProjectCard technologies={["Node", "Next.Js"]}></ProjectCard>
            <ProjectCard>lor</ProjectCard>
          </div>
          <span className="projects_subtitle">&#125;</span>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <div className="section-title section-title--right">
            <span></span>
            <h2>Habilidades Técnicas</h2>
          </div>

          <SkillSelector />
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-title container section-title--left">
          <h2>Sobre mi</h2>
        </div>
        <div className="container">
          <div className="about_text">
            <h3>
              <span className="text-glow--primary">&lt;H1&gt;</span>Hello, i'm
              José Manuel!
              <span className="text-glow--primary">&lt;&#47;h1&gt;</span>
            </h3>

            <p>
              <span className="text-glow--primary">&lt;p&gt;</span> I'm a
              self-taught front-end developer based in Kyiv, Ukraine. I can
              develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.{" "}
              <span className="text-glow--primary">&lt;&#47;p&gt;</span>
            </p>
            <p>
              <span className="text-glow--primary">&lt;p&gt;</span> Transforming
              my creativity and knowledge into a websites has been my passion
              for over a year. I have been helping various clients to establish
              their presence online. I always strive to learn about the newest
              technologies and frameworks.{" "}
              <span className="text-glow--primary">&lt;&#47;p&gt;</span>
            </p>
          </div>

          <img src="/me2.webp" alt="" />
        </div>
      </section>

      <div className="container">
        <section id="contact" className="contact">
          <div className="section-title section-title--left">
            <h2>Contacto</h2>
          </div>

          <div className="contact_content">
            <p>
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me
            </p>

            <div className="rrss">
              <h3>Message me here</h3>
              <ul className="rrss_list">
                <li>joseg200217@gmail.com</li>
                <li>my-empty-space</li>
                <li>@emptyspace</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
