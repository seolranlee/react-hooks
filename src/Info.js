import React, { useState, useEffect } from 'react';

const Info = () => {
    const [ name, setName ] = useState('');
    const [ nickname, setNickname ] = useState(''); // state가 여러개가 된다면은 useState를 여러번 사용하면 된다.

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    useEffect(()=>{
        console.log('effect');
        console.log({name, nickname});
        return () => {
            console.log('cleanup');
            console.log({name, nickname}); 
        };
    }, []);  // 두번째 파라미터에 유즈이펙트를 언제 실행할지에 대한 조건.

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                {name} {nickname}
            </div>
        </div>
    );
};

export default Info;