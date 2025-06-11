import { generate, count } from "random-words";
import { createRef, useEffect, useRef, useState, useMemo, use } from "react";
import UpperMenu from "./UpperMenu";
import { useTestMode } from "../context/TestModeContext";

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
        if(latestCountDown<=1){
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
        if(allCurrChars.length<=currentCharIndex) {
            allCurrChars[allCurrChars.length - 1].classList.remove("current-right");
        }else{
            allCurrChars[currentCharIndex].classList.remove("current");
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
        return;

    }

    if (event.key === allCurrChars[currentCharIndex].innerText) {
      allCurrChars[currentCharIndex].className = 'correct';

     
    } else {
      allCurrChars[currentCharIndex].className = 'incorrect';
    
    }
    if (currentCharIndex + 1 === allCurrChars.length) {
       
        allCurrChars[currentCharIndex].className += " current-right"
      
      } else {
       
        allCurrChars[currentCharIndex+1].className = "current"
        
      }
       setCurrentCharIndex((ci) => ci + 1);
    
    
    
     
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
      {testEnd?<h1>Test Over</h1>:<div className="typing-box" onClick={focusInput}>
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
