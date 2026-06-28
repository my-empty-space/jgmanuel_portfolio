import fs from 'fs/promises';
import path from 'path';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import { compileMDX } from 'next-mdx-remote/rsc';

import styles from './Projects.module.css';

import Image from 'next/image';
import Button from '@/components/Button/Button';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

async function getProjects() {
  const filenames = await fs.readdir(path.join(process.cwd(), 'src/projects-entries'));

  const projects = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(process.cwd(), 'src/projects-entries', filename);
      const fileContents = await fs.readFile(filePath, 'utf-8');

      const { frontmatter } = await compileMDX({
        source: fileContents,
        options: {
          parseFrontmatter: true,
        },
        components: {
          ImageGallery,
        },
      });

      return {
        slug: filename.replace('.mdx', ''),
        ...frontmatter,
      };
    })
  );

  return projects;
}

export default async function Projects() {
  const projects = await getProjects();
  const filteredProjects = projects.slice(0, 3);

  return (
    <section className={`container ${styles.projects}`}>
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
        {filteredProjects.map((project, index) => (
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

      <div className={styles.btn}>
        <Button href="/projects">Ver más proyectos</Button>
      </div>
    </section>
  );
}
