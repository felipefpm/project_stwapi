import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3rem;
  background-color: var(--white);
  max-width: 1024px;
  min-width: 320px;
`

export const FilmsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`

export const CharacterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

`

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  p {
    font-family: 'Ubuntu Light';
    font-size: 22px;
    color: var(--gray-400);
  }
`

export const ContentItens = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  :hover {
    cursor: pointer;
  }
`