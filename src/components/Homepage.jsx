import { Button } from "react-bootstrap";
export const Homepage = () => {
  return (
    <>
      <div className="content-home">
        <div className="content-img">
          <img
            src="https://images7.alphacoders.com/592/592678.jpg"
            alt="pokemon-banner"
          />
        </div>
        <div className="content-blank"></div>
        <div className="content-title">
          <h1 className="pb-3 text-light">See your pokemon statisic here!</h1>
          <Button size="lg" variant="warning">All Pokemons...</Button>
        </div>
      </div>
    </>
  );
};
