import { useState } from 'react';
import styles from './IndustriesSection.module.scss';

interface IndustryCardProps {
  title: string;
  image: string;
  hoveredImage: string;
}

const IndustryCard = ({ title, image, hoveredImage }: IndustryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const industryTitle = title.split(' ');
  return (
    <div
      className={styles['industries-section__industry']}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={styles['industries-section__image']}
        src={isHovered ? hoveredImage : image}
        alt={title}
      />
      <span className={styles['industries-section__industry-title']}>
        {industryTitle.length > 1 ? (
          <>
            {industryTitle[0]}
            <br />
            {industryTitle.slice(1).join(' ')}
          </>
        ) : (
          industryTitle
        )}
      </span>
      <button className={styles['industries-section__button']}>Перейти</button>
    </div>
  );
};

export default IndustryCard;
