import ReactDOMServer from "react-dom/server";

const Koros = () => {
  <svg
    className="koros-waves"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width="100%"
    height="85"
  >
    <defs>
      <pattern
        id="korosBasic"
        x="0"
        y="0"
        width="106"
        height="85"
        patternUnits="userSpaceOnUse"
      >
        <path
          transform="scale(5.3)"
          d="M0,800h20V0c-4.9,0-5,2.6-9.9,2.6S5,0,0,0V800z"
        />
      </pattern>
    </defs>
    <rect fill="url(#korosBasic)" width="100%" height="85" />
  </svg>;
};

export const Background = () => {
  return (
    <div className="background__wrapper">
      <Koros />
    </div>
  );
};

// Render the component as an image
export const imageSrc = `data:image/svg+xml;base64,${btoa(
  ReactDOMServer.renderToStaticMarkup(<Background />)
)}`;
