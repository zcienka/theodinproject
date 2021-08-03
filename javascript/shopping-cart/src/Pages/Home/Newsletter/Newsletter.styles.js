import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 50%;
  }

  h2 {
    font-family: 'Cabin', sans-serif;
    font-size: 18px;
    font-weight: bold;
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`

export const Image = styled.img`
  float: left;
  width: 200px;
  @media only screen and (min-width: 768px) {
    width: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`
export const EmailContainer = styled.div`
  height: 196px;
  background-color: #E4DADA;
  opacity: 0.64;
  padding: 32px;
  font-family: 'Cabin', sans-serif;

  .header {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    .desktop-container {
      background-color: var(--light-brown);
      width: 95%;
      height: 95%;
      padding: 32px;
      padding-top: 24px;

      .header {
        display: inline;
        text-align: center;
        margin-bottom: 16px;
      }
    }
  }

  h3 {
    opacity: 1;
    font-size: 16px;
    color: black;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      margin-top: 40px;
      background-color: var(--off-white);
      outline: none;
      padding: 8px;
      padding-left: 16px;
      padding-right: 16px;
      width: 100%;
      box-shadow: none;
      border: none;
      @media only screen and (min-width: 768px) {
        width: 90%;
      }

      input:focus {
        outline: none;
      }
    }
`
export const Container = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`



