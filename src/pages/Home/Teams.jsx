// Importing useState hook and PropTypes library
import { useState } from "react";
import PropTypes from "prop-types";

// Importing Background component
import { Background } from "./Background/Background";

// A functional component for the individual team item
const TeamsItem = (props) => {
  // Defining the showMore state and its setState function using useState hook
  const [showMore, setShowMore] = useState(false);

  // Toggling the showMore state
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Slicing the text into a preview and the rest
  const textPreview = props.text
    ? props.text.slice(0, props.text.indexOf(".") + 1)
    : "";
  const textAll = props.text
    ? props.text.slice(props.text.indexOf(".") + 1)
    : "";

  // Rendering the individual team item with the relevant props and state
  return (
    <div className="homePage__teams--containers-item ">
      <img src={props.img} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>
        {textPreview}
        {showMore ? textAll : ".."}
      </p>
      <button onClick={toggleShowMore}>
        {showMore ? props.less : props.more}
      </button>
    </div>
  );
};

// Defining the propTypes for the TeamsItem component
TeamsItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
  less: PropTypes.string.isRequired,
};

// The Teams component that renders all the teams on the home page
export const Teams = ({ teams, mediaImg, ictImg, softaImg }) => {
  // Defining the teams data that will be passed to the TeamsItem components
  const teamsData = [
    {
      id: "media",
      img: mediaImg,
      title: "Media",
      text: teams.media_desc,
      alt: "Virittämö's Media Team",
    },
    {
      id: "ict",
      img: ictImg,
      title: "ICT",
      text: teams.ict_desc,
      alt: "Virittämö's ICT Team",
    },
    {
      id: "softa",
      img: softaImg,
      title: "Softa",
      text: teams.software_desc,
      alt: "Virittämö's Software Team",
    },
  ];

  // Rendering the Teams component with the relevant props and state
  return (
    <section className="homePage__teams">
      <Background />
      <h2>{teams.title}</h2>
      <div className="homePage__teams--containers">
        {teamsData.map((team) => (
          <TeamsItem
            key={team.id}
            img={team.img}
            title={team.title}
            text={team.text}
            alt={team.alt}
            more={teams.read_more_btn}
            less={teams.read_less_btn}
          />
        ))}
      </div>
    </section>
  );
};

// Defining the propTypes for the Teams component
Teams.propTypes = {
  teams: PropTypes.shape({
    title: PropTypes.string.isRequired,
    media_desc: PropTypes.string.isRequired,
    ict_desc: PropTypes.string.isRequired,
    software_desc: PropTypes.string.isRequired,
    read_more_btn: PropTypes.string.isRequired,
    read_less_btn: PropTypes.string.isRequired,
  }).isRequired,
  mediaImg: PropTypes.string.isRequired,
  ictImg: PropTypes.string.isRequired,
  softaImg: PropTypes.string.isRequired,
};
