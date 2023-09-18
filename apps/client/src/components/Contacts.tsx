import { useContext } from "react";
import { LanguageContext } from "../utils/langContext";

export function Contacts(){
   const { lang } = useContext(LanguageContext);
 const {
    contact_details,
    locations,
  } = lang.home_page;
  return (
     <>
      <h2 id="contacts">{contact_details.title}</h2>
      <div className="footer__contacts">
        <ul className="footer__contacts--list">
          {contact_details.team.map((item, index) => (
            <li key={index} className="footer__contacts--list-item">
              <p>{item.name}</p>
              <p>{item.title}</p>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </li>
          ))}
        </ul>
        <div id="black-bar-container">
          <div id="black-bar"></div>
        </div>
        <ul className="footer__locations--list">
          {locations.map((item, index) => (
            <li key={index} className="footer__locations--list-item">
              <p>{item.name}</p>
              <p>{item.title}</p>
              <p>{item.address}</p>
              <p>{item.postalCode}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
