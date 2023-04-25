import { useContext } from "react";
import { SwapiContext } from "../../context/swapiContext";
import SearchIcon from '../../assets/icons/search-icon.svg'
import { Container } from "./styles";


export function Header() {
  const { setSearch } = useContext(SwapiContext)

  return (
    <Container>
      <h1>Star Wars movies</h1>
      <div>
        <input
          type="text" 
          placeholder="Search movies or characters" 
          onChange={(e) => setSearch(e.target.value)} 
        />
        
        <img src={SearchIcon} alt="Search" />
      </div>
    </Container>
  )
}