'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './SkillSelector.module.css';

export default function SkillSelector({ techs = [] }) {
  const [imgUrl, setImgUrl] = useState(
    `/tech-images/${techs[0]}.png`
  );

  const techList = new Map([
    // indexName, displayName
    ['html', 'HTML'],
    ['css', 'CSS'],
    ['js', 'JavaScript'],
    ['node', 'Node.js'],
    ['react', 'React.js'],
    ['nextjs', 'Next.js'],
    ['wordpress', 'Wordpress'],
    ['bash', "Linux VPS's"],
    ['sql', 'SQL'],
    ['git', 'Git'],
    ['figma', 'Figma'],
    ['mysql', 'MySQL'],
    ['mongodb', 'MongoDB'],
  ]);

  if (techs.length <= 0) {
    return (
      <div>
        <h2 style={{ color: 'var(--c-error)' }}>TECH prop cannot be empty</h2>
        <p style={{ color: 'var(--c-error)' }}>
          Select an option from the list for the indexName's below:
        </p>

        <ul
          style={{
            color: 'var(--c-error);',
            fontFamily: 'var(--font-fira-mono)',
            paddingLeft: '20px',
          }}
        >
          {[...techList.entries()].map(([indexName, displayName]) => (
            <li key={indexName}>
              {indexName} &#40;{displayName}&#41;
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {techs.map((element, index) => (
          <span
            key={index}
            className={
              imgUrl == `/tech-images/${element}.png`
                ? styles.selected
                : ''
            }
            onClick={() => setImgUrl(`/tech-images/${element}.png`)}
          >
            <Image
              src={`/icons/${element}.svg`}
              width={383}
              height={335}
              alt=""
            />{' '}
            {techList.get(element)}
          </span>
        ))}
      </div>

      <div className={styles.decorations}>
        <div className={styles.bigImage}>
          <Image src={imgUrl} alt="" width={360} height={360} />
        </div>

        <Image
          className={styles.deco1}
          src="/shape_dots.svg"
          width={95}
          height={112}
          alt="backgroud dectoration"
        />
        <Image
          className={styles.deco2}
          src="/shape_rectangle.svg"
          width={95}
          height={112}
          alt="backgroud dectoration"
        />
        <Image
          className={styles.deco3}
          src="/shape_rectangle.svg"
          width={95}
          height={112}
          alt="backgroud dectoration"
        />
        <Image
          className={styles.deco4}
          src="/shape_charJ.svg"
          width={95}
          height={112}
          alt="backgroud dectoration"
        />
      </div>
    </div>
  );
}
