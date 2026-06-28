import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';

export async function getProjectData(projectSlug) {
  const data = await fs.readFile(path.join(process.cwd(), `src/projects-entries/${projectSlug}.mdx`), 'utf-8');

  const { content, frontmatter } = await compileMDX({
    source: data,
    options: {
      parseFrontmatter: true,
    },
  })

  return { content, frontmatter };
}


export async function getAllProjects() {
  const filenames = await fs.readdir(path.join(process.cwd(), 'src/projects-entries'));

  const projects = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(process.cwd(), 'src/projects-entries', filename);
      const fileData = await fs.readFile(filePath, 'utf-8');

      const { content, frontmatter } = await compileMDX({
        source: fileData,
        options: {
          parseFrontmatter: true,
        },
      });

      return {
        slug: filename.replace('.mdx', ''),
        data: content,
        ...frontmatter,
      };
    })
  );

  return projects;
}