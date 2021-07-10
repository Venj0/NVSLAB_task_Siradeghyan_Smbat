import styled         from "styled-components";
import { animations } from "@vj-styles/animation";


export const Styled = {
  Gallery: styled.div<{ status: boolean }>`
    height: 100vh;
    width: 100%;
    overflow: hidden auto;
    padding: ${({status}) => status ? 20 : 50}px 3vw 20px ${({status}) => status ? "calc(200px + 3vw)" : "3vw"};
    ${animations.all}
    display: flex;
    flex-wrap: wrap;
    column-gap: 3vw;
    row-gap: 20px;
    justify-content: space-evenly;
    position: relative;

    .view-more {
      position: fixed;
      opacity: .5;
      left: calc(50% - 100px);
      bottom: 25px;
      width: 200px;
      height: 40px;
      border-radius: 5px;
      background-color: ${({theme}) => theme.colors.black}80;

      color: ${({theme}) => theme.colors.pageC};
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 7px ${({theme}) => theme.colors.shadow};
      z-index: 100;

      &:hover {
        cursor: pointer;
        background-color: ${({theme}) => theme.colors.pageBgc};
        opacity: 1;
      }
    }

  `,
  Image  : styled.div`
    width: 300px;
    height: 200px;
    @media (max-width: 767px) {
      width: 28vw;
      height: 20vw;
    }

    img {
      width: 100%;
      height: 100%;
      box-shadow: 0 0 7px ${({theme}) => theme.colors.shadow};

      object-fit: contain;


    }

  `
}