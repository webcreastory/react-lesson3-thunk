// src/App.jsx

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __minusNumber, __addNumber } from "./redux/modules/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (evnet) => {
    const { value } = evnet.target;
    setNumber(+value);
  };

  // thunk 함수를 디스패치한다. payload는 thunk함수에 넣어주면,
  // 리덕스 모듈에서 payload로 받을 수 있다.
  const onClickAddNumberHandler = () => {
    // dispatch(addNumber(+number));
    dispatch(__addNumber(number));
  };

  const onClickMinusNumberHandler = () => {
    // dispatch(minusNumber(+number));
    dispatch(__minusNumber(number));
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;