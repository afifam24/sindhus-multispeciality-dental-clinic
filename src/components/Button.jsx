import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // primary | secondary | outline | white
  size = 'md',       // sm | md | lg
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseClasses = `btn btn-${variant} btn-${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
