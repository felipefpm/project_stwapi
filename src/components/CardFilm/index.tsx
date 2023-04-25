import { useContext } from "react";
import { format } from "date-fns";
import { SwapiContext } from "../../context/swapiContext";
import CardImage from '../../assets/images/card-movie.svg'
import CalenderIcon from '../../assets/icons/calendar-icon.svg'
import DirectorIcon from '../../assets/icons/chair-director-icon.svg'
import { SkeletonCardFilm } from "./skeletonCardFilm";
import { Container } from "./styles";
import { Link } from 'react-router-dom';

export function CardFilm() {
  const { films, search } = useContext(SwapiContext)
  
  const filteredFilms = films?.filter(film =>
    film.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {
        films ? 
          filteredFilms?.map((film, index) => {
            const data = new Date(film.release_date);
            const newData = format(data, "dd/MM/yyy")
            
            return ( 
              <Link key={film.title} to={`/detail/${index + 1}`}>
                <Container>
                  <img className="img-card" src={CardImage} alt="" />
                  <div className="separetor" />
                  <div className="general-content">
                    <div className="texts-card">
                      <h2>{film.title}</h2>
                      <p>
                        {`${film.opening_crawl.substr(0, 200) }...`}
                      </p>
                    </div>

                    <div className="infos-card">
                      <div>
                        <img src={DirectorIcon} alt="Director Movie" />
                        <p>{film.director}</p>
                      </div>
                      <div>
                        <img src={CalenderIcon} alt="Relese Date" />
                        <p>{newData}</p>
                      </div>
                    </div>
                  </div>
                </Container>
              </Link>
            )
          })
        :
        <SkeletonCardFilm />
      }
    </>
  )
}