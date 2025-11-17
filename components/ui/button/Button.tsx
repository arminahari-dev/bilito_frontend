import React from "react";

export default function Button({
  size,
  variant,
  content,
  onClick,
  lefticon,
  righticon,
  disabled,
  style,
}: {
  size: "32" | "40" | "48" | "56";
  variant: "fill" | "stroke" | "text";
  content: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  lefticon?: React.ReactNode;
  righticon?: React.ReactNode;
  disabled?: boolean;
  style?: string;
}) {
  const sizeClasses = {
    "32": "h-8 w-36 text-button-sm",
    "40": "h-10 w-36 text-button-sm",
    "48": "h-12 w-36 text-button-sm",
    "56": "h-14 w-[175px] text-button-lg",
  };

  const variantStyle =
    variant === "fill"
      ? "bg-primary hover:bg-shade-2 active:bg-shade-3 text-white"
      : variant === "stroke"
      ? "border border-primary hover:border-shade-2 hover:text-shade-2 active:border-shade-3 active:text-shade-3 text-primary"
      : variant === "text" &&
        "hover:text-shade-2 active:text-shade-3 text-primary";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        cursor-pointer px-4! py-2! flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${variantStyle}
        ${style}
      `}
    >
      {lefticon && <>{lefticon}</>}
      {content && <> {content}</>}
      {righticon && <>{righticon}</>}
    </button>
  );
}
