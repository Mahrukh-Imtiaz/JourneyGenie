import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import './checkout.css';

const Checkoutform = () => {
  const [tourPackages, setTourPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedType, setSelectedType] = useState('Premium');
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [stripeKey, setStripeKey] = useState(null);
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/booking/tour-packages');
        setTourPackages(response.data.tourPackages);
        if (response.data.tourPackages.length > 0) {
          setSelectedPackage(response.data.tourPackages[0]); // Select the first package by default
        }
      } catch (error) {
        console.error('Error fetching tour packages:', error);
      }
    };

    const fetchStripeKey = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/key/stripe-key');
        setStripeKey(response.data.publishableKey);
      } catch (error) {
        console.error('Error fetching Stripe key:', error);
      }
    };

    fetchTourPackages();
    fetchStripeKey();
  }, []); // Empty dependency array to run once on component mount

  const handlePackageChange = (event) => {
    const selectedPackageId = event.target.value;
    const selectedPackage = tourPackages.find(pkg => pkg._id === selectedPackageId);
    setSelectedPackage(selectedPackage);
  };

  const handlePayment = async () => {
    if (!selectedPackage || !stripeKey) {
      console.error('Selected package or Stripe key not loaded.');
      return;
    }
  
    const basePrice = selectedPackage.Price || 0; // Default to 0 if Price is undefined
    const typePrice = selectedType === 'VIP' ? 500 : 0;
    const totalPrice = ((basePrice + typePrice) * numberOfPersons)*100;
    
    try {
      const response = await axios.post('http://localhost:8080/api/payment/create-intent', {
        amount: totalPrice,
        currency: 'USD',
        description: `${selectedPackage.Country} - ${selectedType}`,
      });
  
      const { sessionId } = response.data;
      setSessionId(sessionId);
  
      const stripe = await loadStripe(stripeKey || '');
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });
  
      if (error) {
        console.error('Error redirecting to Checkout:', error);
        // Handle error (display error message, retry request, etc.)
      }
    } catch (error) {
      console.error('Error creating Payment Intent:', error);
      // Handle error (display error message, retry request, etc.)
    }
  };
  

  return (
    <div className="checkout-container">
      <h1 className='Stripe-Form-Heading'>Booking Details</h1>
      <div className="booking-details">
        <div className="form-container">
          <label className='StripeLabel'>Select Tour Package:</label>
          <select className='Stripe-Select' value={selectedPackage ? selectedPackage._id : ''} onChange={handlePackageChange}>
            {tourPackages.map(pkg => (
              <option key={pkg._id} value={pkg._id}>{pkg.Country}</option>
            ))}
          </select>
          <label className='StripeLabel'>Price: ${selectedPackage ? selectedPackage.Price || 0 : 0}</label>
          <label className='StripeLabel'>Select Type:</label>
          <select className='Stripe-Select' value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="Premium">Premium</option>
            <option value="VIP">VIP</option>
          </select>
          <label className='StripeLabel'>Number of Persons:</label>
          <input
            type="number"
            value={numberOfPersons}
            onChange={(e) => setNumberOfPersons(parseInt(e.target.value) || 0)} // Ensure valid number
          />
          <button className='Stripe-button' onClick={handlePayment}>Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Checkoutform;
