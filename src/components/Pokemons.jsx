import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { PokemonCard } from "./PokemonCard";

const base_url = "https://pokeapi.co/api/v2/pokemon";

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState(base_url);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokemons = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${url}`,
      });
      valuesPokemon(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    } catch (err) {
      console.log(err);
    }
  };

  const valuesPokemon = async (results) => {
    try {
      results.map(async (item) => {
        const { data } = await axios({
          method: "GET",
          url: `${base_url}/${item.name}`,
        });
        setPokemons((pokemon) => [...pokemon, data]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [url]);

  const prevDisabled = !prevUrl ? "disabled my-4" : "my-4";
  const nextDisabled = !nextUrl ? "disabled my-4" : "my-4";

  return (
    <>
      <div className="content-pokemons">
        <div className="text-center pt-4 mb-4">
          <h1 className="fw-bold">POKEMONS</h1>
        </div>
        <hr className="pb-4" />
        <PokemonCard pokemons={pokemons} />
        <div className="d-flex justify-content-between py-4 mx-5">
          <Button
            className={prevDisabled}
            style={{ width: 120 }}
            variant="warning"
            onClick={() => {
              setUrl(prevUrl);
              setPokemons([]);
            }}
          >
            Previous
          </Button>
          <Button
            className={nextDisabled}
            style={{ width: 120 }}
            variant="warning"
            onClick={() => {
              setUrl(nextUrl);
              setPokemons([]);
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
