import styled from "styled-components"

export const Navbar = styled.div`
  z-index: 2;
  ul {
    height: 70px;
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    list-style-type: none;
    li {
      margin: 20px;
      font-family: 'Cabin', sans-serif;
      @media only screen and (min-width: 768px) {
        margin: 50px;
      }
      a {
        cursor: pointer;
        color: var(--black);
        font-weight: bold;
      }
    }

    @media only screen and (min-width: 768px) {
      display: flex !important;
      justify-content: flex-end;
      color: var(--black);
    }

  }
`

export const Burger = styled.img`
  z-index: 2;
  width: 24px;
  position: absolute;
  right: 0;
  margin: 20px;
  cursor: pointer;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(149deg) brightness(105%) contrast(102%);
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export const Logo = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;

  h1 {
    margin-top: 20px;
    font-size: 24px;
    margin-left: 30px;
    font-family: 'Fredoka One', cursive;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
