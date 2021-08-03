import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 104px;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    text-align: center;
    font-family: 'Cabin', sans-serif;
    margin-bottom: 8px;
  }

  #filter {
    filter: invert(99%) sepia(92%) saturate(101%) hue-rotate(55deg) brightness(113%) contrast(92%);

    img {
      margin: 10px;
    }
  }
`