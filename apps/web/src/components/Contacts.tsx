import { useContext } from "react";
import { type Lang, LanguageContext } from "../utils/langContext";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../utils/getStrapiData";

export function Contacts() {
  const { lang } = useContext(LanguageContext) as Lang;
  const { contact_details, locations } = lang.home_page;

    const {isLoading: isContactLoading, data: contactData} = useQuery({
    queryKey: ["contactData"],
    queryFn: () => getMe(`http://localhost:1337/api/contacts?populate=*`),
  });
    if (isContactLoading || !contactData) {
    return <div>Loading...</div>;
    }

    console.log('contact data', contactData.data);
  return (
    <>
      <h2 id="contacts">{contactData.data[0].attributes.title}</h2>
      <div className="footer__contacts">
        <ul className="footer__contacts--list">
               {contactData.data[0].attributes.contact_info_list.map((item, index) => (
            <li key={index} className="footer__contacts--list-item">
              <p>{item.name}</p>
              <p>{item.head}</p>
              <p>{item.phone_number}</p>
              <p>{item.email}</p>
            </li>
          ))}
        </ul>
        <div id="black-bar-container">
          <div id="black-bar"></div>
        </div>
        <ul className="footer__locations--list">
          {contactData.data.map((item, index) => (
            <li key={index} className="footer__locations--list-item">
              <p>{item.attributes.address.company_name}</p>
              <p>{item.attributes.address.spot}</p>
              <p>{item.attributes.address.address}</p>
              <p>{item.attributes.address.po_box}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
