import styled from 'styled-components';

export const Container = styled.div`
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

export const SkeletonContainer = styled.div`

`