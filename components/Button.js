const Button = ({ className, children, ...rest }) => {
  return (
    <button
      className={`py-4 px-8 bg-red rounded-tl rounded-br text-pampas font-openSans text-2xl hover:bg-ebony duration-200${
        className ? ` ${className}` : ''
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
