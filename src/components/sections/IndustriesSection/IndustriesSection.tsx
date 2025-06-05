import IndustryCard from './IndustryCard';

import cellulose from '../../../assets/images/herb 1.png';
import celluloseBlue from '../../../assets/images/herb-blue.png';
import neraFilter from '../../../assets/images/filter 1.png';
import neraFilterBlue from '../../../assets/images/filter-blue.png';
import automobileBlack from '../../../assets/images/electric-car-black.png';
import automobileBlue from '../../../assets/images/Vector.png';
import respiratory from '../../../assets/images/Outline.png';
import respiratoryBlue from '../../../assets/images/outline-blue.png';
import group from '../../../assets/images/pharmacy 1.png';
import groupBlue from '../../../assets/images/pharmacy-blue.png';

import styles from './IndustriesSection.module.scss';

const IndustriesSection = () => {
  const industries = [
    { title: 'Целлюлоза', img: cellulose, hoveredImg: celluloseBlue },
    { title: 'Нера-фильтры', img: neraFilter, hoveredImg: neraFilterBlue },
    {
      title: 'Автомобильные',
      img: automobileBlack,
      hoveredImg: automobileBlue,
    },
    {
      title: 'Респираторные помещения',
      img: respiratory,
      hoveredImg: respiratoryBlue,
    },
    { title: 'Медицинские помещения', img: group, hoveredImg: groupBlue },
  ];

  return (
    <section className={styles['industries-section']}>
      <div className={styles['industries-section__container']}>
        <div className={styles['industries-section__intro']}>
          <span className={styles['industries-section__title']}>Отрасли</span>
          <div className={styles['industries-section__content']}>
            CARBONEX - является лидером в области фитрованных материалов. Наши
            передовые материалы используются практически во всех отраслях
            промышленности.
          </div>
        </div>
        <div className={styles['industries-section__industries']}>
          {industries.map((industry) => (
            <IndustryCard
              title={industry.title}
              image={industry.img}
              hoveredImage={industry.hoveredImg}
              key={industry.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
