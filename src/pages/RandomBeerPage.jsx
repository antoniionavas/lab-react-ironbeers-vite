import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(response);
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(randomBeer);

  return (
    <div>
      <img src={randomBeer.image_url} alt="image" width={100} />
      <h3>{randomBeer.name}</h3>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
