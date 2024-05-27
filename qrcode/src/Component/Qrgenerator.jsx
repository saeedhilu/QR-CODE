import React,{useState  } from 'react'
import QRCode from 'qrcode.react';
import './StyleQr.css'
export const Qrgenerator = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div className="container">
        <h1>QR Code Generator</h1>
        <input 
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder='Enter Your QR DATA'
          className="input-field"
        />
        {
          inputValue && (
            <div className="qr-code-container">
              <QRCode value={inputValue} />
            </div>
          )
        }
      </div>
    );
}
export default Qrgenerator