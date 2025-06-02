import Button from '../../ui/Button';

import logo from '../../../assets/images/logo.png';
import phone from '../../../assets/images/phone.svg';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img className={styles.header__img} src={logo} alt="carbonex logo" />
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            <li className={styles.header__item}>Главная</li>
            <li className={styles.header__item}>Отрасли</li>
            <li className={styles.header__item}>Продукция</li>
            <li className={styles.header__item}>О компании</li>
            <li className={styles.header__item}>Новости</li>
            <li className={styles.header__item}>Контакты</li>
          </ul>
        </nav>
        <div className={styles.header__contacts}>
          <div className={styles.header__phone_block}>
            <div className={styles.header__phone}>
              <img
                className={styles.header__phone_img}
                src={phone}
                alt="phone image"
              />
              <span className={styles.header__phone_number}>
                +7 (981) 843-88-04
              </span>
            </div>
            <div className={styles.header__phone_caption}>
              Позвонить менеджеру
            </div>
          </div>
          <Button className="header__button" variant="primary" withBorder>
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
