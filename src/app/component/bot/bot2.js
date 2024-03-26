//App.js
"use client"
//App.js


import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import React, { useState,useEffect } from 'react';


const steps = [
  {
    id: '0',
    message: 'Hey',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Please write your name',
    trigger: 'getUsername',
  },
  {
    id: 'getUsername',
    user: true,
    trigger: '2',
  },
  {
    id: '2',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: 'getPhoneNumber',
  },
  {
    id: 'getPhoneNumber',
    message: 'Please provide your phone number.',
    trigger: 'phoneNumber',
  },
  {
    id: 'phoneNumber',
    user: true,
    trigger: 'getEmail',

    validator: (value) => {
      if (/^\d{10}$/.test(value)) {
        return true;
      } else {
        return 'Please enter a valid 10-digit phone number.';
      }
    },
  },
  {
    id: 'getEmail',
    message: 'Please provide your email address.',
    trigger: 'email',
  },
  {
    id: 'email',
    user: true,
    trigger: 'saveData',
    validator: (value) => {
      if (/^\S+@\S+\.\S+$/.test(value)) {
        return true;
      } else {
        return 'Please enter a valid email address.';
      }
    },
  },
  {
    id: 'saveData',
    component: (
        <div className='  w-full p-4 rounded-full '>
          <p className='flex justify-center text-purple-600'>Click the button below to join WhatsApp.</p>
          <a href="https://wa.me/your-phonenumber" className='flex justify-center rounded-3xl bg-purple-600 border-none w-full'>Join WhatsApp</a>
        </div>
      ),
    end: true,
  },
  {
    id: 'showButton',
    component: (
      <div className='  w-full p-4 rounded-full '>
        <p className='flex justify-center text-purple-600'>Click the button below to join WhatsApp.</p>
        <a href="https://wa.me/your-phonenumber" className='flex justify-center rounded-3xl bg-purple-600 border-none w-full'>Join WhatsApp</a>
      </div>
    ),
  end: true,

  },
 
];

const theme = {
  background: '#595559',
  headerBgColor: '#692469',
  headerFontSize: '20px',
  botBubbleColor: '#805AD5',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#6a3e70',
  userFontColor: 'white',
};

const config = {
  botAvatar: 'bot.png',
  floating: true,
};

function ChattBot() {
    const inputStyle = {

        color: '#6a3e70', // Change this color as desired // Change this color as desired
        borderRadius: '999px',
        padding: '8px',
       
      };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div>
        <ChatBot
          headerTitle="InvesNow"
          steps={steps}
          {...config}
          inputStyle={inputStyle}
        />
         </div> 
      </ThemeProvider>
    </div>
  );
}

export default ChattBot;
