import React, { useState } from 'react'
import "./creator.css"
import { useLocation } from 'react-router-dom'
import { FaUsers } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

const number = 1
const number2 = 3
const number3 = 5

const Switch = ({ isChecked, onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
};

const CreatorPage = () => {

  const location = useLocation()
  const { member } = location.state

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [bloq, setBloq] = useState(true)



  const [value, setValue] = useState(1)
  return (
    <>
      <div className='mb-[70px]'>
        <section className='flex justify-center items-center'>
          <div className='mt-[100px] bg-cover w-[85%] flex bg-center h-[320px] flex-start p-[30px] items-center gap-6' style={{ backgroundImage: "url(https://kofe.al/defaults/user-cover.jpg)" }}>
            <img className='w-[120px] h-[120px] rounded-[50%]' src={member.image} alt="" />
            <div className='flex flex-col gap-[10px] text-white font-semibold text-[20px]'>
              <h1>{member.name}</h1>
              <h2>{member.info}</h2>
              <p>{member.supporter}</p>
            </div>
          </div>
        </section>
        <section className='flex justify-center items-center mt-[40px]'>
          <div className='w-[87%] flex flex-wrap gap-[50px] bg-white '>
            <div className='kofeborder flex flex-col w-[388px] justify-around items-center h-[500px] p-[15px] gap-[20px] border-[4px] border-purple-500'>
              <h2 style={{ color: "#788090" }}>{member.name} üçün kofe al</h2>
              <div className='flex justify-center gap-[10px] items-center'>
                <img className='w-[30px] h-[30px]' src="https://kofe.al/storage/images/icons_for_donations/coffee.svg" alt="" />
                <p style={{ fontSize: "20px", color: "#6B7385" }}>x</p>
                <div className='kofenumber flex justify-center text-center items-center gap-4'>
                  <span className=' w-[48px] h-[48px] flex rounded-[100%] items-center border justify-center bg-blue-700 text-white'>{number}</span>
                  <span className=' w-[48px] h-[48px] flex rounded-[100%] items-center border justify-center'>{number2}</span>
                  <span className=' w-[48px] h-[48px] flex rounded-[100%] items-center border justify-center '>{number3}</span>
                  <input className=' w-[48px] h-[48px] text-center border-[2px]' type="number" value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
              </div>
              <input type="email" placeholder='Email' />
              <input type="text" placeholder='Mesaj...' />
              <div className="checkbox-group">
                <div className='h-[10px]'>  <Switch isChecked={isChecked} onChange={handleCheckboxChange} />
                  <label htmlFor="remember">Bu mesajı şəxsi edin</label>
                </div>
              </div>
              <button className='kofebuton w-[334px] h-60px bg-purple-400 text-white rounded-[5px]'>{value} AZN kofe al</button>
              <div className='flex text-center gap-3 items-center'>
                <input type="checkbox" />
                <label htmlFor="">Qaydaları qəbul edirəm</label>
              </div>

            </div>
            <div className='about-part'>
              <div>
                <button style={{ borderBottom: bloq ? "1px solid #3F64F0" : "1 px solid black", color: bloq ? "#3F64F0" : "black" }} onClick={() => setBloq(true)}>Haqqimda</button>
                <button style={{ borderBottom: bloq ? "1px solid black" : "1px solid #3F64F0", color: bloq ? "black" : "#3F64F0" }} onClick={() => setBloq(false)}>Bloq</button>
              </div>
              <div className='member-name' style={{ display: bloq ? "flex" : "none" }}>
                <h3>{member.name}</h3>
                <div>
                  <img src="https://kofe.al/storage/images/icons_for_donations/coffee.svg" alt="" />
                  <p>20 kofe</p>
                </div>
                <div>
                  <FaUsers />
                  <p>{member.supporter}</p>
                </div>
                <div>
                  <FaBook />
                  <p>0 blog</p>
                </div>
              </div>
              <p style={{ display: bloq ? "block" : "none" }}>{member.info}</p>
              <p style={{ display: bloq ? "block" : "none" }}></p>
            </div>
            <div style={{ display: bloq ? "none" : "inline-block" }}>
              <h2 style={{ display: "block", position: "relative", top: "70px", backgroundColor: "#FFF3CD" }}>Məlumat yoxdur</h2>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CreatorPage