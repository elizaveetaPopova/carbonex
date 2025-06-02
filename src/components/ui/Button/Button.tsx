import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'wide';
  withBorder?: boolean;
  children: React.ReactNode;
  className: string;
}

const Button = ({
  variant = 'primary',
  size = 'default',
  withBorder,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const buttonClass = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    withBorder ? styles['button--with-border'] : styles['button--no-border'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
