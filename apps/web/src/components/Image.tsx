export function Image({ src, alt, width, height, ...props }: { src: string, alt: string, width?: number, height?: number }) {
    return <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        {...props} />;
}
