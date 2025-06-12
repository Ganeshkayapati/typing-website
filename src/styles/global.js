import {createGlobalStyle} from 'styled-components'

export const GlobalStyle=createGlobalStyle`

*{
  
    box-sizing:border-box;
}

body{
    background:${({theme})=>theme.background};
    color:${({theme})=>theme.textColor};
    margin:0;
    padding:0;
    transition: all 0.3s linear;
}
.canvas {
    display: grid;
    min-height: 100vh;
    grid-auto-overflow: row;
    grid-template-row: auto 1fr auto;
    gap: 0.5rem;
    padding: 2rem;
    width: 100vw;
    align-items: center;
    text-align: center;
}
.typing-box {
    display: block;
    max-width: 1000px;
    height: 140px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}
.words {
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    color:${({theme})=>theme.typeBoxColor};
}
.word {
    margin:5px;
    padding-right: 2px;
}
.hidden-input {
    opacity: 0;
}
.current{
    border-left: 1px solid ;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingRight{
        0% {
            border-left-color: ${({theme})=>theme.textColor};;
        }
        25% {
            border-left-color: ${({theme})=>theme.textColor};;
        }
        50% {
            border-left-color: ${({theme})=>theme.textColor};;
        }
        75% {
            border-left-color: ${({theme})=>theme.textColor};;
        }
        100% {
            border-left-color: ${({theme})=>theme.textColor};;
        }
    }
}
.current-right{
    border-right: 1px solid ;
    animation: blinking 2s infinite;
    animation-timing-function: ease;
    @keyframes blinking {
        0% {
            border-right-color: ${({theme})=>theme.textColor};;
        }
        25% {
            border-right-color: ${({theme})=>theme.textColor};;
        }
        50% {
            border-right-color: ${({theme})=>theme.textColor};;
        }
        75% {
            border-right-color: ${({theme})=>theme.textColor};;
        }
        100% {
            border-right-color: ${({theme})=>theme.textColor};;
        }
    }
}
.correct {
    color: ${({theme})=>theme.textColor};;
    font-weight: bold;
}
.incorrect {
    color: red;
    font-weight: bold;
}
.upper-menu {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  justify-content: space-between;
  font-size: 1.2rem;
  padding: 0.5rem;
}
.modes{
  display: flex;
  gap: 0.5rem;
}
.time-mode:hover {
  color: green;
  cursor: pointer;
}
.footer{
    width:1000px;
    display:flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
}

.stats-box {
    display: flex;
    width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}
.left-stats {
    width: 30%;
    padding: 30px;
}
.right-stats {
    width: 70%;
}
.title {
    font-size: 20px;
    color: ${({theme})=>theme.typeBoxColor};
}
.subtitle {
    font-size: 30px;
    color: #ffcc99;
}

.header{
    width:1000px;
    display:flex;
    justify-content:space-between;
    margin-left:auto;
    margin-right:auto;
   
}
.user-profile{
    width:1000px;
    margin:auto;
    display:flex;
    height:15rem;
    background:${({theme})=>theme.typeBoxColor};
    opacity:0.8;
    border-radius:20px;
    justify-content:center;
    textAlign:center;
    padding:1rem;
}
.user{
    width:50%;
    display:flex;
    margin-top:30px;
    margin-bottom:30px
    font-size:1.5rem;
    padding:1rem;
    border-right:2px solid ;
}
.info{ 
    width:60%;
    padding:2rem;
    marginTop:1rem;
}
.picture{
    width:40%;
}
.tests{
    width:50%;
    font-size:3rem;
    display:flex;
    align-items:center;
    justify-content:center;
}
.table,graph-userPage{
    margin:auto;
    width:1000px;
}
.center-of-screen{
    display:flex;
    min-height:100vh;
    justify-content:center;
    align-items:center;
}
.graph-userPage {
  width: 600px;
  height: 300px;
  margin:0 auto;
}

`;