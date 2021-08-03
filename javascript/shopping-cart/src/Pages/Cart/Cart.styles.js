import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-start;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    font-family: 'Cabin', sans-serif;
    border-bottom: solid var(--grey);
    width: 100%;
    padding: 8px;
    margin: 8px;
  }
`
export const SummaryContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 110px;
  }
`
export const OrderSummary = styled.div`
  height: 300px;
  margin: 70px;
  margin-top: 32px;
  padding: 32px;
  border-radius: 16px;
  background-color: var(--transparent-brown);
  text-align: center;
  font-family: 'Cabin', sans-serif;
  box-sizing: border-box;

  h2 {
    padding-top: -16px;
    padding-bottom: 8px;
    font-size: 24px;
  }

  .details {
    background-color: white;
    height: 80%;
    border-radius: 16px;
    padding: 24px;
    width: 100%;

    button {
      margin-top: 8px;
      height: 32px;
      width: 100%;
      border: none;
      background-color: var(--black);
      color: white;
      font-family: 'Cabin', sans-serif;
      cursor: pointer;
    }
  }

  p {
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 12px;
    width: 100%;
  }

  .right {
    display: flex;
    justify-content: flex-end;
  }

  .left {
    display: flex;
    justify-content: flex-start;
  }

  .newline {
    display: flex;
    flex-direction: row;
  }
`
export const Container = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
  }
`