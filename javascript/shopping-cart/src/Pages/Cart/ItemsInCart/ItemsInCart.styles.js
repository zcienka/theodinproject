import styled from "styled-components";

export const ProductInfo = styled.div`
  font-family: Cabin, sans-serif;
  margin-top: 8px;

  p {
    font-size: 16px;
    border-bottom: none;
  }

  #block1 {
    text-align: left;
    margin-left: 24px;
    margin-right: auto;
    display: inline-block;
    float: left;

    #price {
      font-size: 16px;
      padding-bottom: 12px;
      padding-left: 0;
      padding-right: 0;
      padding-top: 8px;
    }

    #size {
      padding-top: 32px;
      padding-left: 0;
      padding-right: 0;
      font-size: 12px;
    }

    #num-of-products {
      background-color: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 24px;
      overflow: hidden;
    }

    #name {
      font-size: 16px;
      padding-left: 0;
      padding-right: 0;
      border-bottom: 2px solid var(--grey);
    }
  }
`

export const Image = styled.img`
  display: flex;
  flex-direction: row;
  object-fit: cover;
  height: 150px;
  width: 100px;
  border-radius: 16px;
`

export const Wrapper = styled.div`
  margin-right: auto;
  display: flex;
  overflow: hidden;
  margin-top: 8px;
  background-color: var(--transparent-brown);
  width: 100%;
  border-radius: 16px;
`
