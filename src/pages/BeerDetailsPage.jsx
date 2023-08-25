import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beerDetails, setBeerDetails] = useState([]);

  const params = useParams();

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`
      );
      console.log(response);
      setBeerDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(beerDetails);
  return (
    <div>
      <img src={beerDetails.image_url} alt="image" width={100} />
      <h3>{beerDetails.name}</h3>
      <p>{beerDetails.tagline}</p>
      <p>{beerDetails.first_brewed}</p>
      <p>{beerDetails.attenuation_level}</p>
      <p>{beerDetails.description}</p>
      <p>{beerDetails.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
