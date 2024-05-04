import React from 'react';
import "./Creatorsection.css";

const Creatorsection = () => {
  return (
    <div>
      <div className='headerr'>
        <div className='headerword'>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", textAlign:"center"}}>
            <h1 style={{ fontSize: "40px", fontWeight: "700", color: "rgb(25,35,53)" }}>Üzvlərimiz</h1>
            <button className="creator-button">🎉 <span>1812 Yaradıcı</span></button>
          </div>
          <p style={{ fontSize: "18px", fontWeight: "400" }}>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</p>
        </div>
      </div>

      
    </div>
  );
}

export default Creatorsection;
