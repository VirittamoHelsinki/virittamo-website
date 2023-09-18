import { Image } from "../../components/Image";

export const Stories_Item = ({
    alt,
    img_src,
    full_name,
    story_text,
    job_title,
}: {
    alt: string,
    img_src: string,
    full_name: string,
    story_text: string[],
    job_title: string
}) => {
    return (
        <div className="storiesPage__featuredStory--item">
            <Image src={img_src} alt={alt} />
            <div className="storiesPage__featuredStory--item-title">
                <h3>{full_name}</h3>
                <h4>{job_title}</h4>
            </div>
            <div className="storiesPage__featuredStory--item-text">
                {story_text.map((text_part, index) => (
                    <p key={index}>{text_part}</p>
                ))}
            </div>
        </div>
    );
};
