import { Header } from '../../components/Header'
import { CardFilm } from '../../components/CardFilm'
import { CardCharacters } from '../../components/CardCharacters'
import StarIcon from '../../assets/icons/star.svg'
import CharactersIcon from '../../assets/icons/user-friends.svg'
import { CharacterContent, Container, ContentItens, ContentTitle, FilmsContent } from './styles'

export function HomePage() {

  return (
    <Container>
      <Header />

      <FilmsContent >
        <ContentTitle>
          <img src={StarIcon} alt="Star icon from movies" />
          <p>Movies</p>
        </ContentTitle>

          <ContentItens>
            <CardFilm />
          </ContentItens>
      </FilmsContent>

      <CharacterContent >
        <ContentTitle>
          <img src={CharactersIcon} alt="Star icon from movies" />
          <p>Characters</p>
        </ContentTitle>

        <ContentItens>
          <CardCharacters />
        </ContentItens>
      </CharacterContent>
    </Container>
  )
}
