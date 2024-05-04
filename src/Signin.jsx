import React, { useState } from 'react';
import './App.css';

const Switch = ({ isChecked, onChange }) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            <span className="slider round"></span>
        </label>
    );
};

const Signin = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="container">
            <div className="login-container">
                <h1 className="login-title">Daxil ol</h1>
                <form>
                    <div className="input-group">
                        <input type="text" id="email" placeholder='Email *' />
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" placeholder='Şifrə *' />
                    </div>
                    <div className="checkbox-group">
                        <div>  <Switch isChecked={isChecked} onChange={handleCheckboxChange} />
                            <label htmlFor="remember">Məni xatırla</label>
                        </div>

                        <p>Şifrəni unutdun?</p>
                    </div>
                    <button type="submit" className="login-button">Daxil ol</button>
                </form>
            </div>
        </div>
    )
}

export default Signin;
