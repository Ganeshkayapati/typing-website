import {createGlobalStyle} from 'styled-components'
export const GlobalStyle=createGlobalStyle`

*{
  
    box-sizing:border-box;
}

body{
    background:black;
    color:white;
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
            border-left-color: white;
        }
        25% {
            border-left-color: black;
        }
        50% {
            border-left-color: white;
        }
        75% {
            border-left-color: black;
        }
        100% {
            border-left-color: white;
        }
    }
}
.current-right{
    border-right: 1px solid ;
    animation: blinking 2s infinite;
    animation-timing-function: ease;
    @keyframes blinking {
        0% {
            border-right-color: white;
        }
        25% {
            border-right-color: black;
        }
        50% {
            border-right-color: white;
        }
        75% {
            border-right-color: black;
        }
        100% {
            border-right-color: white;
        }
    }
}
.correct {
    color: green;
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

`;