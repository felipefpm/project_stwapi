import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../services/api';
import { FilmType, PeopleType, PlanetType } from '../types';

interface SwapiContextTypes {
  peoples: PeopleType[] | undefined,
  films: FilmType[] | undefined
  planets: PlanetType[] | undefined
  search: string
  setSearch: (param: string) => void
}

export const SwapiContext = createContext({} as SwapiContextTypes)

interface SwapiContextProviderProps {
  children: ReactNode
}

export function SwapiContextProvider(props: SwapiContextProviderProps) {
  const [films, setFilms] = useState<FilmType[]>()
  const [peoples, setPeoples] = useState<PeopleType[]>()
  const [planets, setPlanets] = useState<PlanetType[]>()
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function peoples() {
      try {
        const { data } = await api.get('people/')

        setPeoples(data.results)
      } catch (error) {
        console.log(error)
      }
    }

    peoples()
  }, [])

  useEffect(() => {
    async function movies() {
      try {
        const { data } = await api.get(`films/`)

        setFilms(data.results)
      } catch (error) {
        console.log(error)
      }
    }

    movies()
  }, [])

  useEffect(() => {
    async function planets() {
      try {
        const { data } = await api.get(`planets/`)

        setPlanets(data.results)
      } catch (error) {
        console.log(error)
      }
    }

    planets()
  }, [])

  return (
    <SwapiContext.Provider value={{ peoples, films, planets, search, setSearch }}>
      {props.children}
    </SwapiContext.Provider>
  );
}