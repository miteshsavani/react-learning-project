import React, { useEffect, useState } from 'react';


/**
 * 
 * Refernce: https://www.30secondsofcode.org/react/s/use-key-press
 * @returns 
 */
const useKeyPress = targetKey => {
    const [keyPressed, setKeyPressed] = React.useState(false);
  
    const downHandler = ({ key }) => {
      if (key === targetKey) setKeyPressed(true);
    };
  
    const upHandler = ({ key }) => {
      if (key === targetKey) setKeyPressed(false);
    };
  
    React.useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
  
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, [downHandler, upHandler]);
  
    return keyPressed;
  };

  const PressKey = ({ inputKey }) => {
    inputKey = inputKey || 'a';
    const isKeyPress = useKeyPress(inputKey);
    const [count, setCount] = useState(0);

    useEffect(()=>{
      if(isKeyPress){
        setCount(count => count + 1);
      }
    },[isKeyPress])


    return ( 
    <div>
    <p> {`The ${inputKey} is pressed!, Times : ${count}`}</p>
    </div>);
  };

  export default PressKey;