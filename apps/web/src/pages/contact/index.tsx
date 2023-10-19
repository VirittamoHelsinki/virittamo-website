import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { type Lang, LanguageContext } from "../../utils/langContext";
import { getMe } from "../../utils/getStrapiData";


export function ContactPage() {
    const { lang, fi } = useContext(LanguageContext) as Lang;

    const { isLoading: isContactFiLoading, data: contactFiData } = useQuery({
        queryKey: ["contactFiData"],
        queryFn: () =>
            getMe(`http://localhost:1337/api/contact?locale=fi&populate=*`),
    });

    const { isLoading: isContactEnLoading, data: contactEnData } = useQuery({
        queryKey: ["contactEnData"],
        queryFn: () =>
            getMe(`http://localhost:1337/api/contact?locale=en&populate=*`),
    });

    const contactData = lang === fi ? contactFiData : contactEnData;
    const isContactLoading =
        lang === fi ? isContactFiLoading : isContactEnLoading;

    if (isContactLoading || !contactData) {
        return <div>Loading...</div>;
    }

    return (
        <main className="flex flex-col grow">
            <h1 className="">{contactData.data.attributes.title}</h1>
            <div className="">
                <ul className="grid grid-cols-4 gap-5">
                    {contactData.data.attributes.contact_info_list.map((item, index) => (
                        <li key={index} className="bg-teal-50 p-4 rounded-tl rounded-br">
                            <p>{item.name}</p>
                            <p>{item.title}</p>
                            <p>{item.phone_number}</p>
                            <p>{item.email}</p>
                        </li>
                    ))}
                </ul>
                 <ul className="footer__locations--list">
                    <li className="footer__locations--list-item">
                        <p>{contactData.data.attributes.name}</p>
                        <p>{contactData.data.attributes.place}</p>
                        <p>{contactData.data.attributes.address}</p>
                        <p>{contactData.data.attributes.po_box}</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}
