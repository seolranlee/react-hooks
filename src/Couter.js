import React, { useState } from 'react';

const Couter = () => {

    const [value, setValue] = useState(0);  // 현재 상태, 바꿀 싶은 상태    // useState(초기값)

    const onIncrement = () => setValue(value + 1);
    const onDecrement = () => setValue(value - 1);
    return (
        <div>
            <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
            <button onClick={onIncrement}>+1</button>
            <button onClick={onDecrement}>-1</button>
        </div>
    );
};

export default Couter;