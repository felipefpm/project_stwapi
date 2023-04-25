import styled from 'styled-components';
import HeaderBackground from '../../assets/images/background_header.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 226px;
  background-image: url(${HeaderBackground});

  h1 {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 2.6rem;
    background-clip: text;
    background: linear-gradient(64.17deg, #FF5A56 15.66%, #FF9A42 83.04%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-bottom: 2.5rem;
  }

  div {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;

    input {
      width: 90%;
      height: 56px;
      border-radius: 5px 0 0 5px;
      border-color: var(--white);
      border-right-color: transparent;
      background-color: transparent;
      color: var(--white);
      outline: 0;
      padding-left: 14px;

      ::placeholder {
        font-size: 1.2rem;
        color: var(--white);
      }
    }

    img {
      width: 28px;
      height: 56px;
      padding-right: 5px;
      margin-left: -6px;
      vertical-align: bottom;
      border: solid 2px;
      border-radius: 0 5px 5px 0;
      border-color: var(--white);
      border-left-color: transparent;
    }
  }

  @media (min-width:1024px) {
   div {
    width: 50%;
   }
  }
`