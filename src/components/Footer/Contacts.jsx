import PropTypes from "prop-types";

export const Contacts = ({ scrollRef, contact_details, locations }) => {
  return (
    <>
      <h2 ref={scrollRef}>{contact_details.title}</h2>
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
  );
};

Contacts.propTypes = {
  scrollRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  contact_details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    team: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
    })
  ).isRequired,
};
