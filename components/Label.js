const Label = ({ className, children }) => {
  return (
    <label className={`text-2xl${className ? ` ${className}` : ''}`}>
      {children}
    </label>
  );
};

export default Label;
