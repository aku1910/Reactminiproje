import React, { useEffect, useState } from 'react';

const Section1 = () => {
  const [phrases] = useState(["Kitab yaz", "İdman et", "Öyrənərək", "Danışaraq", "Rəsm çək", "Video çək"]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div>
      <h1 className='sectionbg'>
        <p className='word1'>Backed by <img src="https://kofe.al/assets/images/logo/500.svg" alt="" /> brand Global</p>
        <p className='word2'>
          <span className='animation'>{phrases[currentPhraseIndex]}</span>
          , sevdiyin işlə məşğul ol,
        </p>
        <p className='word2'>izləyicilərindən dəstək qazan!</p>
        <div className='word3'>
        <input  className='word3input' type="text"  value="     kofe.al/username"  /> <button className='word3button'>Yarat →</button>
        </div>
        <p className='word4'>Yarat 🎉 Paylaş 🚀 Qazan ☕</p>
      </h1>
    </div>
  );
}

export default Section1;
