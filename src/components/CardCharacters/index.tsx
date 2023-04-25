import { useContext, useEffect, useState } from "react";
import { SwapiContext } from "../../context/swapiContext";
import LocationIcon from '../../assets/icons/map-marker-alt.svg'
import AvatarIcon from '../../assets/images/user-circle.svg'
import { Container } from "./styles";
import { api } from "../../services/api";
import { SkeletonCardCharacters } from "./skeletonCardCharacters";

export function CardCharacters() {
  const { peoples, planets, search } = useContext(SwapiContext)

  const filteredChar = peoples?.filter(people =>
    people.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {peoples && planets ? 
        filteredChar?.map((char, index) => {

          const regex = /[0-9]+/g;
          const number = Number(char.homeworld.match(regex));
          const planet = planets?.find((p, index) => index + 1 === number)

          return (
                <Container key={index} >
                  <img src={AvatarIcon} alt="" />
                  <h1>{char.name}</h1>
                  <div>
                    <img src={LocationIcon} alt="" />
                    <p>{planet?.name}</p>
                  </div>
                </Container> 
          )
        })
      : 
        <SkeletonCardCharacters /> 
      }
    </>
  )
}