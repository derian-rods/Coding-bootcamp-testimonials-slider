import React, { useState } from 'react';
import './App.css';
let developers = [{
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    avatar: 'https://raw.githubusercontent.com/derian-rods/Coding-bootcamp-testimonials-slider/master/src/assets/img/image-tanya.jpg',
    text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
  },
  {
    name: ' John Tarkpor',
    role: 'Junior Front-end Developer',
    avatar: 'https://raw.githubusercontent.com/derian-rods/Coding-bootcamp-testimonials-slider/master/src/assets/img/image-john.jpg',
    text: '“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
  },
];
function App() {
  let [count, setCount] = useState(0);
  const btnnext = ()=>{
    setCount(count + 1)
    if(count === developers.length - 1){
      setCount(count = 0);
    }
  }
  const btnback = ()=>{
    setCount(count - 1)
    if(count === 0){
      setCount(count = developers.length -1);
    }
  }
  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="slider">
            <div className="textSlider">
                <article> {developers[count].text}</article>
                <span><strong>{developers[count].name}</strong>  {developers[count].role}</span>
            </div>
            <div className="Seccionf">
              <img src={developers[count].avatar}></img>
              <div className='imgb'>
              </div>
              <div className='btnSlider'>
              <button type="button" id="btnback" className="active" onClick={btnback}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path fill="none" stroke="#8585AC" stroke-width="3" d="M11 1L3 9l8 8"/></svg></button>
              <button type="button" id="btnnext" onClick={btnnext}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path fill="none" stroke="#8585AC" stroke-width="3" d="M2 1l8 8-8 8"/></svg></button>
              </div>
            </div>
          </div>
        </div>
        <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer"> Frontend Mentor </a>. 
            Coded by<a href="#" target="_blank" rel="noopener noreferrer">  DerianRS </a>
        </div>
      </main>
    </div>
  );
}

export default App;
