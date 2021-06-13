import { forwardRef } from 'react';

const InputText = ({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={`p-4 bg-pampas border-2 border-pampas rounded text-2xl outline-none duration-200 focus:border-black${
        className ? ` ${className}` : ''
      }`}
      {...rest}
      type="text"
    />
  );
};

export default forwardRef(InputText);
