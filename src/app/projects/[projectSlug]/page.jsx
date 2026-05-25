// TODO: Enable Suspense for MDX rendering
// TODO: Add error page for non-existing project entries
// TODO: Consider upgrading next-mdx-remote to next-mdx-remote-client
// import { Suspense } from "react"; 
import Image from 'next/image';
import styles from './page.module.css';
import SkillSelector from '@/components/SkillSelector/SkillSelector';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import { getProjectData } from '@/utils/projects';

export default async function ProjectEntry({ params }) {
  const { projectSlug } = await params;
  const { content, frontmatter: metadata } = await getProjectData(projectSlug);

  return (<>
    <div className='containerStrech'>
      <header className={styles.header}>
        <div className={styles.titles}>
          <h1>{metadata.title}</h1>
          <p>{metadata.description}</p>
        </div>

        <div className={styles.featuredImage}>
          <Image
            src={metadata.featuredImage}
            alt={metadata.title}
            width={1200}
            height={660}
          />
        </div>
      </header>

      <main className={styles.main}>
        {content}
      </main>

      <ImageGallery images={metadata.images}></ImageGallery>
    </div>

    <section className={`container ${styles.technologies}`}>
      <div className={`titles ${styles.technologies_titles}`}>
        <h2>Stack</h2>
        <h3>
          Tecnologías y herramientas utilizadas durante el desarrollo del proyecto.
        </h3>
      </div>

      <SkillSelector techs={metadata.technologies} />
    </section>
  </>);
};