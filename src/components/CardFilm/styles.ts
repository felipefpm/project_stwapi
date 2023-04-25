import styled from 'styled-components';

export const Container = styled.div`
  width: 311px;
  margin-top: 10px;
  border-radius: 5px;
  padding-bottom: 19px;
  background-color: var(--white);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);

  .img-card {
    width: 100%;
  }

  .separetor {
    margin-top: -4px;
    height: 6px;
    background: linear-gradient(270deg, #EB5757 0.91%, #F2994A 98.98%);
  }

  .general-content {
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 0 11px 0 11px;
    margin-top: 15px;

    .texts-card {
      h2 {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        color: var(--blue-100);
        margin-bottom: 8px;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
      }
    }

    .infos-card {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      gap: 8px;

      div {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      p {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
      }

    }

  }

  @media (max-width: 320px) {
    width: 230px;
  }

`

export const SkeletonContainer = styled.div`
  text-align: left;
  border-radius: 4px;
  background-color: var(--white);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);

  .skeleton-content {
    padding-left: 15px;
  }
`