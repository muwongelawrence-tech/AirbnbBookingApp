import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { HiLockClosed } from "react-icons/hi2";
import { LockOpenIcon } from "@heroicons/react/solid";
import { subScribe } from "../services/userService";
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { setUserData } from "../slices/dataSlice";

export default function PaymentButton({ open, subscribed, user }) {
 
  const dispatch = useDispatch();

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: "UGX",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user.email,
      phone_number: "070********",
      name: user.name,
    },
    customizations: {
      title: "Pay Subscription",
      description: "Payment for advanced /pro videos",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  // adding users subscription to the database...
  const addSubscription = async (response) => {
    if (response.status === "successful") {

      try {
        const { data } = await subScribe(user._id);
        // console.log(data);
        dispatch(setUserData(data));
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          //console.log(ex.response.data);
          toast.error(ex.response.data);
        }
      }
    }
  };

  return (
    <button
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            // console.log(response);
            addSubscription(response);
            closePaymentModal(); // this will close the modal programmatically
          },
          onClose: () => {},
        });
      }}

      disabled = { subscribed }

      className={`text-gray-500 bg-white px-3 py-1 md:py-2 md:px-3  rounded-xl shadow-md font-bold
                   flex items-center space-x-4 mt-10 my-3 hover:shadow-xl active:scale-90 transition duration-150 ${
                     !open && "hidden" 
                   } ${ subscribed ? "cursor-not-allowed": "cursor-pointer"}`}
    >
      {subscribed ? (
        <HiLockClosed className="h-6 text-orange-500  hover:text-orange-600 rotate-12 hover:rotate-45" />
      ) : (
        <LockOpenIcon className="h-6 text-orange-500  hover:text-orange-600 rotate-12 hover:rotate-45" />
      )}

      {subscribed ? "Subscribed" : "Go Premium"}
    </button>
  );
}
