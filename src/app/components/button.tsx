'use client';

import clsx from 'clsx';
import React from 'react';

export interface ButtonProps
  extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
  disabled?: boolean;
}

const Button = ({ disabled, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    />
  );
};

export default Button;