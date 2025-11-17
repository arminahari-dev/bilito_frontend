import Image from "next/image";

export default function Logo({
  width,
  height,
  variant,
  style,
}: {
  width: number;
  height: number;
  variant: "black" | "shade" | "tint" | "white" | "blue";
  style?: string;
}) {
  return (
    <Image
      width={width}
      height={height}
      src={variant}
      className={style}
      alt="LogoImage"
    />
  );
}
