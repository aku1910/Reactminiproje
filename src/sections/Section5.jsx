import React from 'react'
import './Section5.css'

const Section5 = () => {
    return (
        <div>
            <div className='section5head'>
                <div className='section4message'>
                    <button >ONLAYN MAĞAZA</button>
                    <h1>Məhsul və Xidmətlərinizi satın</h1>
                    <span>Kofe.al Mağazanızı açaraq, dərhal rəqəmsal və ya
                        fiziki əşyalar əlavə <br /> edin. Heç bir abunə və ya
                        aktivləşdirmə haqqı yoxdur. Sadəcə məhsul və <br /> ya
                        xidmətlərinizi yerləşdirərək, dərhal satışa başlayın!</span>
                    <div>
                        <h2 style={{fontSize:"23px", fontWeight:"500"}}>`Nə satmaq olar?:</h2>
                        <div style={{ display: "flex", gap: "30px", flexWrap:"wrap" }}>
                            <div>
                                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><p style={{ backgroundColor: "rgb(223,228,253)", color: "rgb(48,87,239) ", borderRadius: "50%", width: "20px", height: "20px", fontSize: "13px", justifyContent: "center", textAlign: 'center' }}>✓</p>  Fiziki məhsul</span>
                                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><p style={{ backgroundColor: "rgb(223,228,253)", color: "rgb(48,87,239) ", borderRadius: "50%", width: "20px", height: "20px", fontSize: "13px", justifyContent: "center", textAlign: 'center' }}>✓</p>  Digital məhsul</span>
                                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><p style={{ backgroundColor: "rgb(223,228,253)", color: "rgb(48,87,239) ", borderRadius: "50%", width: "20px", height: "20px", fontSize: "13px", justifyContent: "center", textAlign: 'center' }}>✓</p>   Affiliate məhsul</span>
                            </div>
                            <div>
                                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><p style={{ backgroundColor: "rgb(223,228,253)", color: "rgb(48,87,239) ", borderRadius: "50%", width: "20px", height: "20px", fontSize: "13px", justifyContent: "center", textAlign: 'center' }}>✓</p>   Xidmət</span>
                                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><p style={{ backgroundColor: "rgb(223,228,253)", color: "rgb(48,87,239) ", borderRadius: "50%", width: "20px", height: "20px", fontSize: "13px", justifyContent: "center", textAlign: 'center' }}>✓</p>   Tədbirə giriş</span>
                                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><p style={{ backgroundColor: "rgb(223,228,253)", color: "rgb(48,87,239) ", borderRadius: "50%", width: "20px", height: "20px", fontSize: "13px", justifyContent: "center", textAlign: 'center' }}>✓</p>   Çap işləri</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://kofe.al/assets/images/splash/layout/az/2-shop.png" alt="" />
            </div>
        </div>
    )
}

export default Section5