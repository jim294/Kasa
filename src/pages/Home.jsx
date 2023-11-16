import Banner from "../components/Banner";
import Cards from "../components/Cards";
import logements from "../logements.json";
import imgPlage from "../assets/images/plage.png";

const Home = () => {
  return (
    <>
      <main>
        <Banner
          imageUrl={imgPlage}
          alt="image de plage"
          captionText="Chez vous, partout et ailleurs"
        />
        <section className="cardsBakground">
          {logements.map((logement, index) => (
            <Cards
              className="card"
              key={index}
              title={logement.title}
              imageUrl={logement.cover}
              link={`/house/${logement.id}`}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
