import React from "react";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
const Payment = () => {
  const { error, isLoading, Razorpay } = useRazorpay();

  const handlePayment = () => {
    const options = {
      key: "rzp_test_hnRa5uq58TIRes",
      amount: 50000, // Amount in paise
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      order_id: "order_test_ABCDEF123456", // Use your generated order_id here
      handler: (response) => {
        console.log(response);
        alert("Payment Successful!");
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  return (

    <div>
    <h1>Payment Page</h1>
    {isLoading && <p>Loading Razorpay...</p>}
    {error && <p>Error loading Razorpay: {error}</p>}
    <button onClick={handlePayment} disabled={isLoading}>
      Pay Now
    </button>
  </div>
  );
};

export default Payment;