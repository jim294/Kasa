import { useState } from "react";
import imgVectorLeft from "../assets/images/Vector-left.png";
import imgVectorRight from "../assets/images/Vector-right.png";

export default function Carousel(props) {
  const { images, pagination } = props;
  const [image, setImage] = useState(0);

  const handleNextDisplay = () => {
    if (image >= pagination - 1) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  };

  const handlePreviousDisplay = () => {
    if (image > 0) {
      setImage(image - 1);
    } else {
      setImage(pagination - 1);
    }
  };

  return (
    <figure className="carousel">
      <img className="carousel__image" src={images[image]} alt="carousel" />
      <img
        className="carousel__arrow carousel__arrow__left"
        onClick={handlePreviousDisplay}
        src={imgVectorLeft}
        alt="fleche gauche"
      />
      <img
        className="carousel__arrow carousel__arrow__right"
        onClick={handleNextDisplay}
        src={imgVectorRight}
        alt="fleche droite"
      />
      <figcaption className="carousel__pagination">
        {image + 1}/{pagination}
      </figcaption>
    </figure>
  );
}
