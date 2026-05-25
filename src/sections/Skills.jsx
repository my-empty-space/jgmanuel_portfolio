import SkillSelector from '@/components/SkillSelector/SkillSelector';
import styles from './Skills.module.css';

export default function Skills() {
  const techs = [
    'html',
    'css',
    'js',
    'node',
    'react',
    'nextjs',
    'wordpress',
    'bash',
    'sql',
    'git',
  ];

  return (
    <section className={`container ${styles.skills}`}>
      <div className={`titles ${styles.titles}`}>
        <h2>Habilidades Técnicas</h2>
        <h3>
          Tecnologías que domino y me permiten crear experiencias web rápidas,
          escalables y centradas en el usuario
        </h3>
      </div>

      <SkillSelector techs={techs} />
    </section>
  );
}
