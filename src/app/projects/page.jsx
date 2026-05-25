import styles from './page.module.css';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { getAllProjects } from '@/utils/projects';

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <section className={`container ${styles.projects} `}>
      <div className={styles.decorations}>
        <div className={styles.deco1}>
          <span>const</span> <span>objProjects &#123;</span>
        </div>
        <div className={styles.deco2}></div>
        <span className={styles.deco3}>&#125;</span>

        <Image
          className={styles.deco4}
          src="/shape_dots.svg"
          width={95}
          height={112}
          alt="backgroud dectoration"
        />
      </div>

      <div className="titles">
        <h2>Proyectos</h2>
        <h3>
          De la teoría a la práctica, estos proyectos son una muestra de mi
          aprendizaje y progresión continua
        </h3>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imgUrl={project.featuredImage}
            technologies={project.technologies}
            projectUrl={`/projects/${project.slug}`}
          >
            {project.description}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}
