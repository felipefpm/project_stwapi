import styled from 'styled-components';
import DetailsHeaderBackground from '../../assets/images/background_header_details.svg'

export const Container = styled.div`
  background-color: var(--white);
  max-width: 1024px;
  min-width: 320px;  
`
export const DetailHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 226px;
  background-image: url(${DetailsHeaderBackground});
  background-position: center;

  h1 {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 2.6rem;
    color: var(--white);
  }
`

export const Content = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 0 15px;


  button {
    margin-top: 15px;
    padding-left: 15px;
    border: none;
    background-color: transparent;
    color: var(--blue-100);
  }

  .film-description {
    max-width: 652px;
    margin-top: 26px;
    text-align: start;
    font-size: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
  }

  .characters-content {
    display: flex;
    gap: 2rem;
  }

  @media (min-width:720px) {
    .film-description {
      align-self: center;
    }
  }
`

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 45px 0 25px 0;

  p {
    font-family: 'Ubuntu Ligth';
    font-size: 22px;
    color: var(--gray-400);
  }
`

export const FormComments = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 434px;
  margin-bottom: 4rem;

  input {
    height: 56px;
    font-size: 15px;
    padding-left: 15px;
    border-radius: 4px;
    border-color: var(--gray-250);
  }

  textarea {
    height: 289px;
    font-size: 15px;
    padding-left: 15px;
    padding-top: 15px;
    border-radius: 4px;
    border-color: var(--gray-250);
  }

  .button {
    border: none;
    border-radius: 4px;
    background: linear-gradient(266.4deg, #EB5757 0%, #F2994A 100%);
    color: var(--white);
    font-size: 16px;
  }
`

export const Comments = styled.form`
  display: flex;
  align-items: start;
  text-align: start;
  gap: 5px;
  width: 100%;
  max-width: 380px;
  margin-bottom: 3rem;

  .comment-content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }

  .likes-area {
    display: flex;
    gap: 1rem;
    align-items: self-end;

    .like {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      gap: 0.15rem;

      p {
        color: var(--green-like);
      }
    }

    .deslike {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.15rem;

      p {
        color: var(--red-deslike);
      }
    }
  }
`

export const CharacterContainer = styled.div`
  width: 226px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 16px 0;
  margin-bottom: 60px;
  background-color: var(--gray-100);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);

  h1 {
    color: var(--blue-100);
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    margin-top: 16px;
  }

  div {
    margin-top: 18px;

    p {
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
    }
  }

  @media (max-width: 320px) {
    width: 200px;
  }
`