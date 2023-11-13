import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className="error">
        <h1 className="error__title">404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">
          <p>Retourner sur la page d’accueil</p>
        </Link>
      </main>
    </>
  );
};

export default Error;
