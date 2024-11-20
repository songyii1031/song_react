import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext('black');

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { value: state.value + 1 };
        case "DECREMENT":
            return { value: state.value - 1 };

            default:
                return state;
    }
}

const ContextSample = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    
  const theme = useContext(ThemeContext);
  const style = {
    width: '24px',
    height: '24px',
    background: theme
  };
  return <div> 
            <div style={style} />

            <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>;
};



export default ContextSample;