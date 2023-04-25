import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;

    --gray-100: #F5F5F5;
    --gray-200: #E5E5E5;
    --gray-250: #999999;
    --gray-300: #777777;
    --gray-400: #666666;
    
    --blue-100: #009CDA;

    --green-like: #00BE3B;
    --red-deslike: #FF5656;
  }

  body{
    background-color: var(--white);
    color: var(--gray-300);
    text-align: -webkit-center;
  }

  body, input, textarea, select, button, border-style {
    font: 400 1rem "Roboto", sans-serif;
  }
  

  @media (max-width:1024px) {
    html {
      font-size: 93.95%;
    }
  }

  @media (max-width: 320px) {
    html {
      font-size: 81.05%;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;