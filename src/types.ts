export interface PeopleType {
  name: string
  homeworld: string
}

export interface PlanetType {
  name: string
}

export interface FilmType {
  title: string
  opening_crawl: string
  director: string
  release_date: string
  characters: string[]
}

export interface CommentType {
  id: string
  name: string
  email: string
  comment: string
}