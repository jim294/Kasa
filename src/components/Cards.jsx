import { Link } from "react-router-dom";

const Card = ({ title, imageUrl, link }) => {
  return (
    <Link to={link}>
      <figure className="cards_all">
        <img src={imageUrl} alt={title} className="cards_all__card" />
        <figcaption className="cards_all__text">{title}</figcaption>
      </figure>
    </Link>
  );
};

export default Card;
