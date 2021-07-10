import styled         from "styled-components";
import { animations } from "@vj-styles/animation";


export const Styled = {
  Navbar :styled.div<{ status: boolean }>`
    width: ${({status})=>status?200:50}px;
    height: ${({status}) => status ? "100vh" : "40px"};
    position: fixed;
    z-index: 900;
   ${animations.all};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${({theme})=>theme.colors.pageBgc} ;
    box-shadow: 0 0 7px ${({theme})=>theme.colors.shadow} ;
    .status-bar.item{
      width: 50px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      span{
        height: 1px;
        background-color: ${({theme})=>theme.colors.pageC};
        width: 100%;
      }
    }
    .item{
      min-height: 40px;
      height: 40px;
      width: 100%;
      padding: 0 20px;
      display: flex;
      
      align-items: center;
      justify-content: flex-start;
      background-color: ${({theme})=>theme.colors.pageBgc} ;
      color: ${({theme})=>theme.colors.pageC };
      &:hover{
        cursor: pointer;
        background-color: ${({theme})=>theme.colors.black}80 ;

      }
      &.active{
        background-color: ${({theme})=>theme.colors.pageC} ; 
        color: ${({theme})=>theme.colors.pageBgc }; 
      }
    }
  `
}