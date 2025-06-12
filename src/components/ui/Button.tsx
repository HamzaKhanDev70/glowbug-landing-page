import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-200";
    
    const variantClasses = {
      primary: "btn-gradient",
      secondary: "bg-dark-200 hover:bg-dark-300 dark:bg-dark-700 dark:hover:bg-dark-600 text-white",
      ghost: "bg-transparent hover:bg-dark-100 dark:hover:bg-dark-800 text-dark-800 dark:text-white",
    };

    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;