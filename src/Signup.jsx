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

const Signup = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="container">
            <div className="login-container">
                <h1 className="login-title">Qeydiyyat</h1>
                <form>
                    <div className="input-group">
                        <input type="text" id="email" placeholder='Email *' />
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" placeholder='Şifrə *' />
                    </div>
              
                    <button type="submit" className="login-button">Qeydiyyat</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
