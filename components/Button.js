const Button = ({ className, children, ...rest }) => {
  return (
    <button
      className={`group relative py-4 px-8 bg-red rounded-tl rounded-br text-pampas font-openSans text-2xl overflow-hidden duration-200${
        className ? ` ${className}` : ''
      }`}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute w-full-1/4 h-full bg-ebony top-0 -left-full-1/4 rounded-br-full duration-500 z-0 group-hover:left-0"></span>
    </button>
  );
};

export default Button;
