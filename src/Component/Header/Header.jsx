import React, { useState, useEffect } from 'react'
import "../Header/Header.css"
export default function Header({ handleAddUser }) {
    const [learn, setLearn] = useState("")
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    const addUser = () =>{
        if (learn === "" || date === "" || name === "" ){
            setErrorMessage('Thông tin chưa đủ!');
            return;
            
        }
        handleAddUser({ learn: learn, date: date, name: name, id: uuidv4(), status: document.querySelector("select").value })
        setLearn(''); 
        setDate(''); 
        setName(''); 
    }
    useEffect(() => {
        if (errorMessage !== '') {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [errorMessage]);


  return (
    <div className='header__container'>
        <div className='header__item__one'>
            <span>@</span>
            <input value={learn} onChange={(e) => setLearn(e.target.value)}  type="text" />
        </div>
        <div className='header__item__two'>
                  <span>@</span>
              <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
        </div>
        <div className='header__item__three'>
                    <select name="" id="">
                  <option value="Chose">Chose</option>
                  <option value="Pending">Pending</option>
                  <option value="Fulfill">Fulfill</option>
                  <option value="Reject">Reject</option>
                    </select>
        </div>
        <div className='header__item__four'>
              <span>@</span>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <div className='header__item__five'>
              <button onClick={addUser} >Submit</button>
        </div>
          <div className='message'>{errorMessage && <p className="error-message">{errorMessage}</p>}</div>
    </div>
     
    
  )
}
