import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [number, setNumber] = useState(0);
    const [nick, setNick] = useState('익명');

    const increase = () => setNumber(number + 1);
    const decrease = () => setNumber(number - 1);

    const changeNick = () => setNick('김철수');

    /*
    useEffect:
    - 화면이 처음으로 렌더링(마운트) 될때 자동으로호출되는 함수
    - 상태값이 변경될 때마다 다시 호출.
    - 만약에 첫 렌더링 시에만 useEffect를 호출하고 싶다면
     두 번째 파라미터롤 빈배열(의존성 배열)을 넣으면 된다.
    - 의존성 배열에 상태변수를 넣으면 해당 상태변수가 업데이트 될 때마다
     useEffect가 재 호출됨.
    */
     useEffect(() => {
        //화면이 처음 렌더링 될때 fetch를 통해 서버api를 호출하는 경우,
        //처음 1회 호출 후에 또 할 필요가?
        console.log('3. useEffect calles');
     }, [nick]);

     console.log('1. component function executed!');

  return (
    <>
        { console.log('2. rendered html!!!') }
        <h1>닉네임: {nick}</h1>
        <h2>{number}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <button onClick={changeNick}>닉네임 변경</button>
    </>
  )
}

export default Counter;