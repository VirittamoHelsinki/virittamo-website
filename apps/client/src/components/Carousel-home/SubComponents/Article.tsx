import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../../utils/langContext";

export function Article({ title_fi, title_en, text_fi, text_en, bg_image, link
}: {
    title_fi: string,
    title_en: string,
    text_fi: string,
    text_en: string,
    bg_image: string,
    link: string
}) {
    const { lang, fi } = useContext(LanguageContext);

    const getTitleLimit = (title: string) => {
        return title.length > 150 ? `${title.substring(0, 150)}..` : title;
    };

    const getTextLimit = (text: string) => {
        return text.length > 225 ? `${text.substring(0, 225)}..` : text;
    };

    const titleLimit_fi = getTitleLimit(title_fi);
    const textLimit_fi = getTextLimit(text_fi);

    const titleLimit_en = getTitleLimit(title_en);
    const textLimit_en = getTextLimit(text_en);

    return (
        <motion.a
            style={{
                backgroundImage: `url(${bg_image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
            className="carousel__item--article"
            rel="noreferrer"
            target="_blank"
            href={link}
            layout
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 1,
            }}
        >
            <div className="carousel__item--article-text">
                <h3>{lang === fi ? titleLimit_fi : titleLimit_en}</h3>
                <p>{lang === fi ? textLimit_fi : textLimit_en}</p>
            </div>
        </motion.a>
    );
}
