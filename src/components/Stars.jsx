import imgVectorStarActive from "../assets/images/Vector-star-active.png"
import imgVectorStarInactive from "../assets/images/Vector-star-inactive.png"

function Stars({ numberActiveStars, numberInactiveStars }) {
  const stars = [];

  for (let i = 0; i < numberActiveStars; i++) {
    stars.push(
      <img key={i} src={imgVectorStarActive} alt="Étoile active" />
    );
  }

  for (let i = 0; i < numberInactiveStars; i++) {
    stars.push(
      <img
        key={i + numberActiveStars}
        src={imgVectorStarInactive}
        alt="Étoile inactive"
      />
    );
  }

  return <div className="stars-container">{stars}</div>;
}

export default Stars;
