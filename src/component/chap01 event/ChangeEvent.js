import React from 'react'

const ChangeEvent = () => {

    const ChangeValue = e => {
        console.log(`value: ${e.target.value}`);
    }



  return (
    <>
        <input type='text' onChange={ ChangeValue } />

        <select onChange={ ChangeValue }>
            <option value='pizza'>피자</option>
            <option value='chicken'>치킨</option>
            <option value='pasta'>파스타</option>
        </select>

    </>
  )
}

export default ChangeEvent;