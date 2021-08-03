import styled from "styled-components"

export const Image = styled.img`
  object-fit: cover;
  height: 160px;
  width: 100px;
  margin-bottom: 2px;
  border-radius: 16px;
  @media only screen and (min-width: 768px) {
    height: 360px;
    width: 240px;
  }
`

export const Container = styled.div`
  cursor: pointer;
  opacity: 1;
  transition: 0.8s;

  #item-info {
    font-family: Cabin, sans-serif;
    font-size: 10px;
    text-align: left;
    border-top: 2px solid var(--black);
    
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
    #item-name {
      font-weight: bold;
      display: inline;
    }

    #price {
      float: right;
      display: inline;
    }
  }

  :hover {
    opacity: 0.7;
  }

`
