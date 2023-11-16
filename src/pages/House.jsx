import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import logements from "../logements.json";

const House = () => {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const house = logements.find((logement) => logement.id === id);

    if (house) {
      setLogement(house);
    } else {
      navigate("/Error");
    }
  }, [id, navigate]);

  if (!logement) {
    return <div></div>;
  }

  const house = logements.find((logement) => logement.id === id);
  const rating = house.rating;
  const numberActiveStars = rating;
  const numberInactiveStars = 5 - numberActiveStars;

  return (
    <>
      <main>
        <Carousel images={house.pictures} pagination={house.pictures.length} />

        <section className="house">
          <section className="house__left">
            <h1 className="house__title">{house.title}</h1>
            <p className="house__location">{house.location}</p>
            <ul>
              {house.tags.map((tag) => (
                <li className="house__tags" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </section>

          <section className="house__right">
            <figure>
              <figcaption className="house__photo-nom">
                {house.host.name}
              </figcaption>
              <img
                className="house__photo-profil"
                src={house.host.picture}
                alt="profil"
              />
            </figure>
            <Stars
              numberActiveStars={numberActiveStars}
              numberInactiveStars={numberInactiveStars}
            />
          </section>
        </section>

        <section className="collapse__house">
          <Collapse
            key={Math.random()}
            title="Description"
            description={house.description}
          />
          <Collapse
            key={Math.random()}
            title="Équipements"
            description={
              <ul>
                {house.equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
        </section>
      </main>
    </>
  );
};

export default House;
