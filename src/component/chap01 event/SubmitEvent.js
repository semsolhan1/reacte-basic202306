import React from 'react'
import './style.css'

const SubmitEvent = () => {
    
    const send = e => {
        e.preventDefault(); //submit기능 중지.

        const $nick = document.getElementById('nickName');
        console.log($nick.value);
    }

    //일회성일때 사용
    const buttonStyle = {
        color : 'red',
        backgroundColor : 'orange',
        fontSize : '1.5em'
    };


  return (

    <form onSubmit={send}>{/* submit이 발동중에 발동 중지를 하는 send 함수 작동 */}
        <input type='text' id='nickName' name='nick' />
        <button style={buttonStyle} type='submit'>확인</button>
    </form>
  );
}

export default SubmitEvent;