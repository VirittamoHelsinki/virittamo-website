export function Image({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={className}
      {...props}
    />
  );
}
