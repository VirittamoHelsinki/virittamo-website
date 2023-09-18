import { Link } from "react-router-dom";
import { Image } from "../Image";

export const Carousel_Item = ({
    _id,
    team,
    img_src_small,
    client_name,
    project_title,
    completion_year,
}: {
    _id: number,
    team: string,
    img_src_small: string,
    client_name: string,
    project_title: string,
    completion_year: string
}) => {
    return (
        <div
            className="flex flex-col w-full h-full">
            <div className="w-full h-[300px] border border-gray-200 rounded">
                <Link to={`/projects/${team}/${_id}`}>
                    <Image src={img_src_small} alt="temp image" className="h-full w-full rounded object-cover" />
                </Link>
            </div>
            <div className="flex flex-wrap items-start">
                <h3 className="flex-[1_1_100%] text-left">{project_title}</h3>
                <p className="flex-[1_1_80%] text-left font-thin">{client_name}</p>
                <p className="flex-[1_1_10%] text-right font-thin">{completion_year}</p>
            </div>
        </div>
    );
}
