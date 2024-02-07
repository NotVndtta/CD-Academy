import React, { useRef, useState } from 'react';
import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/cross.png';

let data = ["","","","","","","","","",];

const Cell = ({ onClick, value }) => (
  <div className='flex h-[180px] w-[180px] bg-[#1f3540] border-[4px] border-[#0f1b21] rounded-[12px] cursor-pointer ' onClick={onClick}>
    {value && <img className='m-12' src={value === 'x' ? cross_icon : circle_icon} />}
  </div>
);

const Hero = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

  const Toggle = (num) => {
    if (lock) {
      return;
    }
    if (count % 2 === 0) {
      data[num] = 'x';
    } else {
      data[num] = 'o';
    }
    setCount(count + 1);
    checkWin();
  }

  const checkWin = () => {
    if(data[0]===data[1] && data[1]===data[2] & data[2] !== ""){
        win(data[2]);
    }
    else if (data[3]===data[4] && data[4]===data[5] & data[5] !== ""){
        win(data[5]);
    }
    else if (data[6]===data[7] && data[7]===data[8] & data[8] !== ""){
        win(data[8]);
    }
    else if (data[0]===data[3] && data[3]===data[6] & data[6] !== ""){
        win(data[6]);
    }
    else if (data[1]===data[4] && data[4]===data[7] & data[7] !== ""){
        win(data[7]);
    }
    else if (data[2]===data[5] && data[5]===data[8] & data[8] !== ""){
        win(data[8]);
    }
    else if (data[0]===data[4] && data[4]===data[8] & data[8] !== ""){
        win(data[8]);
    }
    else if (data[2]===data[4] && data[4]===data[6] & data[6] !== ""){
        win(data[6]);
    }
  }

  const win = (winner) => {
    setLock(true);
    if (winner==='x'){
        titleRef.current.innerHTML = `Grats <img  src=${cross_icon} />`
    }
    else {
        titleRef.current.innerHTML = `Grats <img  src=${circle_icon} />`
    }
  }

  const reset = () => {
    setLock(false);
    data = ["","","","","","","","","",];
    titleRef.current.innerHTML = 'Tic Tac Toe';
    box_array.map((e) => {
        e.current.innerHTML = "";
    })
  }

  return (
    <div className='text-center'>
      <h1 className='mt-12 text-white text-5xl flex justify-center items-center mb-4' ref={titleRef}> Tic Tac Toe game</h1>
      <div className='h-[600px] w-[564px] flex m-auto'>
        <div>
          <Cell ref={box1} onClick={() => Toggle(0)} value={data[0]} />
          <Cell ref={box2} onClick={() => Toggle(1)} value={data[1]} />
          <Cell ref={box3} onClick={() => Toggle(2)} value={data[2]} />
        </div>
        <div>
          <Cell ref={box4} onClick={() => Toggle(3)} value={data[3]} />
          <Cell ref={box5} onClick={() => Toggle(4)} value={data[4]} />
          <Cell ref={box6} onClick={() => Toggle(5)} value={data[5]} />
        </div>
        <div>
          <Cell ref={box7} onClick={() => Toggle(6)} value={data[6]} />
          <Cell ref={box8} onClick={() => Toggle(7)} value={data[7]} />
          <Cell ref={box9} onClick={() => Toggle(8)} value={data[8]} />
        </div>
      </div>
      <button onClick={ () => {reset()}} className='w-64 h-24 border-none outline-none cursor-pointer rounded-full bg-[#1f3540] text-xl text-[#26ffcb] mt-2 mb-12'>Reset</button>
    </div>
  )
}

export default Hero;
