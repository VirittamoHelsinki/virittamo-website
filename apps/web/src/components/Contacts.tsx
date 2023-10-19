import { useContext } from "react";
import { type Lang, LanguageContext } from "../utils/langContext";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../utils/getStrapiData";

export function Contacts() {
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
    <>
      <h2 id="contacts">{contactData.data.attributes.title}</h2>
      <div className="footer__contacts">
        <ul className="footer__contacts--list">
          {contactData.data.attributes.contact_info_list.map((item, index) => (
            <li key={index} className="footer__contacts--list-item">
              <p>{item.name}</p>
              <p>{item.title}</p>
              <p>{item.phone_number}</p>
              <p>{item.email}</p>
            </li>
          ))}
        </ul>
        <div id="black-bar-container">
          <div id="black-bar"></div>
        </div>
        <ul className="footer__locations--list">
          <li className="footer__locations--list-item">
            <p>{contactData.data.attributes.name}</p>
            <p>{contactData.data.attributes.place}</p>
            <p>{contactData.data.attributes.address}</p>
            <p>{contactData.data.attributes.po_box}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
