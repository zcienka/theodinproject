import styled from "styled-components"

export const Content = styled.div`
  margin: 70px;
  margin-bottom: 16px;
`

export const Products = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
  justify-items: center;
  row-gap: 16px;
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`


