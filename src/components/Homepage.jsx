import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Homepage = () => {
  return (
    <>
      <div className="content-home">
        <div className="content-img">
          <img
            className="img-home"
            src="https://images7.alphacoders.com/592/592678.jpg"
            alt="pokemon-banner"
          />
        </div>
        <div className="content-blank"></div>
        <div className="content-title">
          <h1
            className="pb-3 text-light"
            style={{ textShadow: "4px 3px 2px black" }}
          >
            See your pokemon statisic here!
          </h1>
          <Link to="/pokemons">
            <Button size="lg" variant="warning">
              All Pokemons...
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
