import { ComponentProps } from "react";

export const Button = ({
  className = "",
  variant = "default",
  ...props
}: ComponentProps<"button"> & {
  variant?: "default" | "success" | "destructive";
}) => {
  const baseClasses = "text-white px-4 py-2 rounded";
  const variants = {
    default: "bg-blue-500",
    success: "bg-green-500",
    destructive: "bg-red-500",
  };
  return (
    <button
      data-slot="button"
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};
