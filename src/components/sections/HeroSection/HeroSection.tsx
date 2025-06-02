import Button from '../../ui/Button';

import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-section__container']}>
        <span className={styles['hero-section__title']}>
          CARBONEX является лидером <br />в области фильтрационных и
          энергетических решений.
        </span>
        <div className={styles['hero-section__content']}>
          Наши передовые материалы используются практически во всех отраслях
          промышленности и затрагивают каждый аспект современной жизни.
        </div>
        <Button className="hero_button" variant="primary" size="wide">
          Каталог продукции
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
