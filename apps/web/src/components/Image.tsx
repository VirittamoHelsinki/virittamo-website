export function Image({ src, alt, ...props }) {
  return <img src={src} alt={alt} loading="lazy" {...props} />;
}
