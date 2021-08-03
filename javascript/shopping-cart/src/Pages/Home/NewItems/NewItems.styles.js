import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--transparent-brown);

  h2 {
    text-align: center;
    font-family: 'Cabin', sans-serif;
    font-size: 32px;
    padding-top: 32px;
  }

`
export const Images = styled.div`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 16px;
  margin-top: 36px;
  padding-bottom: 36px;

`