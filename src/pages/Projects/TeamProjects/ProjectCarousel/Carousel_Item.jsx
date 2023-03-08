import tempIMG from "../../../Home/assets/teams-section-ict.webp";

export const Carousel_Item = () => {
  return (
    <div className="projectPage__teams--carousel-item">
      <div className="carousel-img-container">
        <img src={tempIMG} alt="temp image" />
      </div>
      <div className="carousel-title-container">
        <h3>Lorem, ipsum.</h3>
        <h3>Lorem, ipsum.</h3>
      </div>
      <p>2023</p>
    </div>
  );
};
