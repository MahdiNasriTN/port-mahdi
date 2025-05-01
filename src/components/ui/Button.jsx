import { forwardRef } from 'react';

const Button = forwardRef(({
  children,
  primary,
  outline,
  as = 'button',
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50';
  
  let buttonStyles = '';
  
  if (primary) {
    buttonStyles = 'bg-primary hover:bg-primary-700 text-white shadow-md hover:shadow-lg';
  } else if (outline) {
    buttonStyles = 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5';
  } else {
    buttonStyles = 'bg-gray-100 hover:bg-gray-200 dark:bg-dark-accent dark:hover:bg-dark-accent/80 text-gray-800 dark:text-gray-200';
  }
  
  const Component = as;
  
  return (
    <Component
      ref={ref}
      className={`${baseStyles} ${buttonStyles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;