function Stars({ numberActiveStars, numberInactiveStars }) {
  const stars = [];

  for (let i = 0; i < numberActiveStars; i++) {
    stars.push(
      <img key={i} src="../images/Vector-star-active.png" alt="Étoile active" />
    );
  }

  for (let i = 0; i < numberInactiveStars; i++) {
    stars.push(
      <img
        key={i + numberActiveStars}
        src="../images/Vector-star-inactive.png"
        alt="Étoile inactive"
      />
    );
  }

  return <div className="stars-container">{stars}</div>;
}

export default Stars;
