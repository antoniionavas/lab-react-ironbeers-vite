import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(allBeers);

  return (
    <div>
      {allBeers.map((eachBeer) => {
        console.log(eachBeer);
        return (
          <div key={eachBeer._id}>
            <Link to={`/beers/${eachBeer._id}`}>
              <h3>{eachBeer.name}</h3>
              <img src={eachBeer.image_url} alt="image" width={100} />
              <p>Tag: {eachBeer.tagline}</p>
              <p>Contributed By: {eachBeer.contributed_by}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
