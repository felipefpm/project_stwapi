import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SwapiContext } from "../../context/swapiContext";
import { SkeletonCardCharacters } from "../../components/CardCharacters/skeletonCardCharacters";
import CharactersIcon from '../../assets/icons/user-friends.svg'
import CommentsIcon from '../../assets/icons/comments.svg'
import UserIcon from '../../assets/icons/user-circle.svg'
import LikeIcon from '../../assets/icons/like.svg'
import DeslikeIcon from '../../assets/icons/deslike.svg'
import LocationIcon from '../../assets/icons/map-marker-alt.svg'
import AvatarIcon from '../../assets/images/user-circle.svg'
import { FormComments, Container, Content, ContentTitle, DetailHeader, Comments, CharacterContainer } from './styles'
import { CommentType } from "../../types";

export function MovieDetail() {
  const { peoples, films, planets } = useContext(SwapiContext)
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ comment, setComment ] = useState('')
  const [bodyComment, setBodyComment] = useState<CommentType[] | null>()
  const navigate = useNavigate();
  const { id } = useParams();
  const filmID = Number(id)
  const findFilm = films?.find((f, index) => index + 1 === filmID)

  function handleComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    let bodyComments = new Array()

    if (localStorage.hasOwnProperty('bodyComments')) {
      bodyComments = JSON.parse(localStorage.getItem('bodyComments'))
    }

    bodyComments.push({
      id: email,
      name,
      email,
      comment
    })

    localStorage.setItem('bodyComments', JSON.stringify(bodyComments))

    location.reload()
  }

  useEffect(() => {
    const comments = JSON.parse(localStorage.getItem('bodyComments'))
    setBodyComment(comments)
  }, [])

  return (
    <Container>
      <DetailHeader>
        <h1>{findFilm?.title}</h1>
      </DetailHeader>

      <Content>
        <button onClick={() => navigate('/')}>
          {'<<'} Back
        </button>
        <p className='film-description'>
          {findFilm?.opening_crawl}
        </p>
        <ContentTitle>
          <img src={CharactersIcon} alt="Characters icon the movies" />
          <p>Characters</p>
        </ContentTitle>

        <div className='characters-content'>
          {findFilm ? 
            findFilm?.characters.map((c, index) => {
              const regex = /[0-9]+/g;
              const charactersID = Number(c.match(regex))
              const people = peoples?.find((p, index) => index + 1 === charactersID)
              const planetID = Number(people?.homeworld.match(regex))
              const planet = planets?.find((p, index) => index + 1 === planetID)

              return (
                <>
                    <CharacterContainer key={index} >
                      <img src={AvatarIcon} alt="" />
                      <h1>{people?.name}</h1>
                      <div>
                        <img src={LocationIcon} alt="" />
                        <p>{planet?.name}</p>
                      </div>
                    </CharacterContainer>
                </>
              )
            })
          :
            <SkeletonCardCharacters />}
        </div>

        <ContentTitle>
          <img src={CommentsIcon} alt="Reviews the movies" />
          <p>Reviews</p>
        </ContentTitle>

        <FormComments onSubmit={(e) => handleComment(e)}>
          <input 
            type="text" 
            placeholder='Name' 
            name="name" 
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder='E-mail' 
            name="email" 
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            placeholder='Comentário'
            onChange={(e) => setComment(e.target.value)}
          />
          <input 
            className='button' 
            type="submit" 
            value="Enviar"
          />
        </FormComments>

        {bodyComment?.map(c =>   
          <Comments>
            <img src={UserIcon} alt="" />
            <div className='comment-content'>
              <p>
                {c.comment}
              </p>

              <div className='likes-area'>
                <div className='deslike'>
                  <p>1</p>
                  <img src={DeslikeIcon} alt="" />
                </div>
                <div className='like'>
                  <p>8</p>
                  <img src={LikeIcon} alt="" />
                </div>
              </div>
            </div>
          </Comments>
        )}
      </Content>
    </Container>
  )
}
