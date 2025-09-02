import { ComponentProps } from "react";

export const Input = ({
  className = "",
  ...props
}: ComponentProps<"input">) => {
  return (
    <input
      data-slot="input"
      className={`border p-2 mr-2 ${className}`}
      {...props}
    />
  );
};
