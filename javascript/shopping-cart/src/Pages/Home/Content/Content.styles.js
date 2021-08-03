import styled from "styled-components"
import BackgroundImage from "../../../images/high_res_products/sweaters.jpg";


export const Message = styled.div`
  padding-top: 32px;
  //margin: 16px;

  h2 {
    font-size: 32px;
    text-align: center;
    font-family: 'Cabin', sans-serif;
    font-weight: bold;

    @media only screen and (min-width: 768px) {
      text-align: left;
      font-size: 48px;
    }
  }

  h3 {
    margin-top: 24px;
    text-align: center;
    font-size: 16px;
    font-family: 'Cabin', sans-serif;
    color: var(--dark-brown);

    @media only screen and (min-width: 768px) {
      text-align: left;
      font-size: 24px;
    }
  }

  .container {
    display: flex;
    justify-content: center;

    button {
      margin-top: 24px;
      width: 188px;
      text-align: center;
      font-size: 16px;
      background-color: black;
      color: var(--off-white);
      padding: 16px;
      cursor: pointer;
      border: none;
      @media only screen and (min-width: 768px) {
        width: 360px;
      }
    }

    margin-bottom: 16px;
    @media only screen and (min-width: 768px) {
      margin-top: 64px;
      display: flex;
      width: 100%;
      justify-content: flex-start;
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 32px;
    margin: 0;
    width: 900px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

`

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--off-white);
  padding-bottom: 30px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0;
    height: 100vh;
  }
`

export const BackgroundPhoto = styled.div`
  width: 100vw;
  height: 320px;
  box-sizing: border-box;
  display: inline-block;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media only screen and (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    background-position: left;
    background-size: cover;
  }
`

