import { Container } from "react-bootstrap";

export const PokemonCard = ({ pokemons }) => {
  const sortPokemons = pokemons.sort((a, b) => a.id - b.id);
  return (
    <>
      <Container>
        <div className="row d-flex justify-content-center mt-3">
          {sortPokemons.map((item, index) => {
            const { name, sprites } = item || {};
            return (
              <div className="img-hover col-md-3 text-center mb-3" key={index}>
                <img
                  className="img-card"
                  src={sprites?.other?.dream_world?.front_default}
                  alt="pokemon"
                />
                <h4 className="my-3">{name}</h4>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};
