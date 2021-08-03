import styled from "styled-components"

export const Image = styled.img`
  width: 100%;
  height: 400px;
  flex-direction: column;
  object-fit: cover;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 640px;
    flex: 1;
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 70px;
  font-family: 'Cabin', sans-serif;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

// price and name of product
export const ItemInfo = styled.div`
  font-family: 'Cabin', sans-serif;
  color: var(--black);
  text-align: center;
  margin-top: 24px;

  @media only screen and (min-width: 768px) {
    text-align: left;
    font-size: 24px;
    padding-top: 52px;
    height: 300px;
    flex-direction: column;
  }

  .container {
    margin-bottom: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 4px;
      width: 24px;
    }

    @media only screen and (min-width: 768px) {
      width: 100%;
      justify-content: left;
    }
  }

  #price {
    margin-top: 8px;
    margin-bottom: 8px;

    @media only screen and (min-width: 768px) {
      margin-top: 32px;
    }
  }

  // Add to cart button
  button {
    margin-top: 4px;
    font-family: 'Cabin', sans-serif;
    width: 100%;
    cursor: pointer;
    height: 32px;
    background-color: var(--grey);
    border: none;

    @media only screen and (min-width: 768px) {
      display: inline-block;
      margin-top: 32px;
      align-items: stretch;
    }
  }


  .container {
    overflow-y: auto;
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: 256px;


    @media only screen and (min-width: 768px) {
      width: 100%;
      max-height: 256px;
    }

    .active {
      max-height: 128px;
      opacity: 0;
      width: 100%;
      font-size: 16px;
      ul {
        flex-direction: column;
        width: 100%;

        li {
          background-color: transparent;
          width: 100%;
          cursor: pointer;
          border-bottom: 2px solid var(--lighter-grey);
          border-left: 2px solid var(--lighter-grey);
          border-right: 2px solid var(--lighter-grey);
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  #no-size-chosen {
    margin-top: 8px;
    color: red;
    font-size: 16px;
  }
`

export const NumberOfItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
  @media only screen and (min-width: 768px) {
    margin-top: 96px;
  }

  button {
    padding: 16px;
    font-size: 24px;
    background-color: transparent;
    cursor: pointer;
    border: none;

    @media only screen and (min-width: 768px) {
      font-size: 32px;
    }
  }

  .box {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 50px;
    height: 24px;
    border: 2px solid var(--black);

    @media only screen and (min-width: 768px) {
      width: 64px;
      height: 32px;
    }
  }
`

export const AddToCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    height: 50px;
    border: none;
    cursor: pointer;
    background-color: var(--black);
    color: var(--off-white);
    font-weight: bold;
    font-family: 'Cabin', sans-serif;
    @media only screen and (min-width: 768px) {
      margin-top: 16px;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media only screen and (min-width: 768px) {
    margin-left: 24px;
  }
`
