// CurrencyConverter.js
import React, { useState, useEffect } from 'react';
import video1 from '../../Assets/video1.mp4'
import './converter.css'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('AED');
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await response.json();
      setExchangeRate(data.rates[toCurrency]);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const convertCurrency = () => {
    const convertedAmount = amount * exchangeRate;
    setConvertedAmount(convertedAmount.toFixed(2));
  };

  return (
    <section className='currencyconverter'>
      <div className='videoDiv'>
        <video src={video1} loop autoPlay muted type="video/mp4"></video>
      </div>

   
    <div className='convertercontainer'>
      <h2>Currency Converter</h2>
      <div className='amount'>
        <label className='amount label' htmlFor="amount">Enter amount:</label>
        <input className='amount input' type="number" id="amount" value={amount} onChange={handleAmountChange} />
      </div>


      <div className='from'>
        <label className='from label' htmlFor="fromCurrency">From </label>
        <select id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="AED">AED</option>
          <option value="INR">INR</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="NZD">NZD</option>
          <option value="QAR">QAR</option>
          <option value="THB">THB</option>
          <option value="AUD">AUD</option>
          <option value="PKR">PKR</option>
          
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div className='to'>
      <label className='to label' htmlFor="toCurrency"> {'\u00A0'}&nbsp;&nbsp;&nbsp;To </label>
         <select id="toCurrency" value={toCurrency} onChange={handleToCurrencyChange}>
         <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="AED">AED</option>
          <option value="INR">INR</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="NZD">NZD</option>
          <option value="QAR">QAR</option>
          <option value="THB">THB</option>
          <option value="AUD">AUD</option>
          <option value="PKR">PKR</option>
          
          {/* Add more currency options as needed */}
        </select>
      </div>
      
      <div className='convert'>
        <button onClick={convertCurrency}>Convert</button>
      </div>
      <div className='converted'>
        <p>Converted Amount  : {convertedAmount}</p>
      </div>
    </div>

    </section>
  );
};

export default CurrencyConverter;
