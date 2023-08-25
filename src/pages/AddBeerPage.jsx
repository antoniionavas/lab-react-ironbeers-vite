import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function AddBeerPage() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [tagLine, setTagLine] = useState("")
  const [descriptionBeer, setDescriptionBeer] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewersTips, setBrewersTips] = useState("")
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState("")
 

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleTagChange = (event) => {
    setTagLine(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescriptionBeer(event.target.value)
  }

  const handleFirstBrewedChange = (event) => {
    setFirstBrewed(event.target.value)
  }

  const handleBrewersTipsChange = (event) => {
    setBrewersTips(event.target.value)
  }

  const handleAttenuationChange = (event) => {
    setAttenuationLevel(event.target.value)
  }

  const handleContributedByChange = (event) => {
    setContributedBy(event.target.value)
  }




  const handleCreateBeer = async (event) => {
    event.preventDefault()
    
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
      name: name,
      tagline: tagLine,
      description: descriptionBeer,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
   
    })
      navigate("/beers")

    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }

  return (
    <div>

        <h2>Crear una cerveza</h2>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleNameChange}/>

          <br/>
          <br/>

          <label htmlFor="tagline">TagLine: </label>
          <input type="text" name="tagline" value={tagLine} onChange={handleTagChange}/>

          <br/>
          <br/>

          <label htmlFor="description">Description: </label>
          <textarea type="text" name="description" value={descriptionBeer} onChange={handleDescriptionChange}/>

          <br/>
          <br/>

          <label htmlFor="first_brewed">First Brewed: </label>
          <input type="text" name="first_brewed" value={firstBrewed} onChange={handleFirstBrewedChange}/>

          <br/>
          <br/>

          <label htmlFor="brewers_tips">Brewers Tips: </label>
          <input type="text" name="brewers_tips" value={brewersTips} onChange={handleBrewersTipsChange}/>

          <br/>
          <br/>

          <label htmlFor="attenuation_level">Attenuation Level: </label>
          <input type="number" name="attenuation_level" value={attenuationLevel} onChange={handleAttenuationChange}/>

          <br/>
          <br/>

          <label htmlFor="contributed_by">Contributed By: </label>
          <input type="text" name="contributed_by" value={contributedBy} onChange={handleContributedByChange}/>

          <br/>
          <br/>

          <button onClick={handleCreateBeer} type="submit">Add Beer</button>


        </form>
    </div>
  )
}

export default AddBeerPage