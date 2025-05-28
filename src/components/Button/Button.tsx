import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className: string;
}

const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const buttonClass = [styles.button, styles[`button--${variant}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
