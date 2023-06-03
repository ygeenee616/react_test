import React, { useReducer } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "./atom";

function Counter() {
  // useReducer를 사용하여 상태와 디스패치 함수를 생성합니다.
  const [counter, setCounter] = useRecoilState(counterState);
  const count = useRecoilValue(counterState);

  return (
    <div>
      <p>Count: {counter} & {count}</p>
      <button
        onClick={() => {
          setCounter((e) => e + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter((e) => e - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
