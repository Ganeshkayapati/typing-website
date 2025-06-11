import { generate, count } from "random-words";
import { createRef, useEffect, useRef, useState, useMemo, use } from "react";
import UpperMenu from "./UpperMenu";
import { useTestMode } from "../context/TestModeContext";
import Stats from "./Stats";

function TypingBox() {
  const inputRef = useRef(null);

  const {testTime}=useTestMode()
  const [wordsArray, setWordsArray] = useState(() => {
    return generate(50);
  });
  const [countDown,setcountDown]=useState(testTime); 
  const [testStarted, setTestStarted] = useState(false);
  const [testEnd, setTestEnd] = useState(false);
  const [intrevalId,setIntrevalId] = useState(null);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [missedChars, setMissedChars] = useState(0);
  const [extraChars, setExtraChars] = useState(0);

  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [graphData, setGraphData] = useState([]); 
  

  const wordsSpanRef = useMemo(() => {
    return Array(wordsArray.length)
      .fill(0)
      .map((i) => createRef(null));
  }, [wordsArray]);


  const startTimer=()=>{
    
    const intrevalId=setInterval(timer,1000);
    setIntrevalId(intrevalId);

    function timer(){
       setcountDown((latestCountDown)=>{
       setCorrectChars((correctChars) => {
         setGraphData((graphData) => {
          return [...graphData, [testTime - latestCountDown+1, (correctChars/5)/((testTime-latestCountDown+1)/60)]];
    })
          return correctChars;
        
       })
        if(latestCountDown===1){
          clearInterval(intrevalId);
          setTestEnd(true);
          return 0;
        }
        return latestCountDown-1;
       });
    }

  }

  const resetTest = () => {
    clearInterval(intrevalId);
    setcountDown(testTime);
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setTestStarted(false);
    setTestEnd(false);
    setWordsArray(generate(50));
    resetWordsSpanRefClassName();
    focusInput();

  }
  const resetWordsSpanRefClassName = () => {
    wordsSpanRef.map(i=>{
      Array.from(i.current.childNodes).map(j=>{
        j.className = '';
      })
    })
    wordsSpanRef[0].current.childNodes[0].className = "current";
  }
  const handleUserInput = (event) => {
    if(!testStarted) {
      startTimer();
      setTestStarted(true);
    }

    const allCurrChars = wordsSpanRef[currentWordIndex].current.childNodes;

    if(event.keyCode === 32) {

      let correctCharsInWord=wordsSpanRef[currentWordIndex].current.querySelectorAll(".correct").length;
      if(correctCharsInWord === allCurrChars.length) {
        setCorrectWords(correctWords + 1);
      }
        if(allCurrChars.length<=currentCharIndex) {
            allCurrChars[allCurrChars.length - 1].classList.remove("current-right");
        }else{
            allCurrChars[currentCharIndex].classList.remove("current");
            setMissedChars(missedChars + (allCurrChars.length - currentCharIndex));
        }
        wordsSpanRef[currentWordIndex+1].current.childNodes[0].className = "current";
        setCurrentWordIndex(currentWordIndex + 1);
        setCurrentCharIndex(0);
        return;
    }

    if(event.keyCode === 8) {
      if (currentCharIndex !== 0) {
            if(allCurrChars.length === currentCharIndex) {

                if(allCurrChars[currentCharIndex - 1].className.includes("extra")) {
                    allCurrChars[currentCharIndex - 1].remove();
                    allCurrChars[currentCharIndex - 2].className += " current-right";
                }else{
                     allCurrChars[currentCharIndex- 1].className = 'current';
                }
               
                 setCurrentCharIndex(currentCharIndex - 1);
                 return;

            }

            allCurrChars[currentCharIndex].className = '';
            allCurrChars[currentCharIndex - 1].className = "current";
            setCurrentCharIndex(currentCharIndex - 1);
      }
      return;
      
    }

    if(allCurrChars.length === currentCharIndex) {
        let newSpan = document.createElement("span");
        newSpan.innerText = event.key;
        newSpan.className = "incorrect extra current-right";
        allCurrChars[currentCharIndex - 1].classList.remove("current-right");
        wordsSpanRef[currentWordIndex].current.append(newSpan);
        setCurrentCharIndex(currentCharIndex + 1);
        setExtraChars(extraChars + 1);
        return;

    }

    if (event.key === allCurrChars[currentCharIndex].innerText) {
      allCurrChars[currentCharIndex].className = 'correct';
      setCorrectChars(correctChars + 1);

     
    } else {
      allCurrChars[currentCharIndex].className = 'incorrect';
      setIncorrectChars(incorrectChars + 1);
    
    }
    if (currentCharIndex + 1 === allCurrChars.length) {
       
        allCurrChars[currentCharIndex].className += " current-right"
      
      } else {
       
        allCurrChars[currentCharIndex+1].className = "current"
        
      }
       setCurrentCharIndex((ci) => ci + 1);
    
    
    
     
  };

  const calculateWPM = () => {
    
    return Math.round((correctChars / 5) / (testTime/60));
    
  };

  const accuracy = () => {
    return Math.round((correctWords / currentWordIndex) * 100);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    resetTest();
  },[testTime])

  useEffect(() => {
    focusInput();
   
    wordsSpanRef[0].current.childNodes[0].className = "current";
  }, []);
  return (
    <div>
      <UpperMenu countDown={countDown}/>
      {testEnd?<Stats wpm={calculateWPM()} accuracy={accuracy()} correctChars={correctChars} inCorrectChars={incorrectChars} missedChars={missedChars} extraChars={extraChars} graphData={graphData}/>:<div className="typing-box" onClick={focusInput}>
        <div className="words">
          {wordsArray.map((word, index) => (
            <span className="word" ref={wordsSpanRef[index]}>
              {word.split("").map((char) => (
                <span>{char}</span>
              ))}
            </span>
          ))}
        </div>
      </div>}

      <input
        className="hidden-input"
        type="text"
        onKeyDown={handleUserInput}
        ref={inputRef}
      />
    </div>
  );
}

export default TypingBox;
