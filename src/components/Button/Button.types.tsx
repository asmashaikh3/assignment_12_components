interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, disabled }) => {
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
