import React, { useReducer } from "react";

// 초기 상태를 정의합니다.
const initialState = { count: 0 };

// 리듀서 함수를 정의합니다.
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  // useReducer를 사용하여 상태와 디스패치 함수를 생성합니다.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Counter;
