'use client';

import React, { useState } from 'react';

interface Message {
  id: number;
  content: string;
}

export default function ChatBox() {

  return (
    <div
      className="w-full h-[100vh] flex flex-col justify-between"
    >
      <div className="h-[80vh] overflow-y-auto p-8">
        <div className='py-4'>
          <div className="p-2 rounded-lg w-max">
            <i className="fa-solid fa-face-smile"></i>
            <span className="ml-2">kimhueReal</span>
          </div>
          <div>
            <div className="p-4 rounded-lg bg-slate-100 text-slate-600">
              How i can assist you today How i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you todayHow i can assist you today
            </div>
          </div>
        </div>

        <div className='py-4'>
          <div className="p-2 rounded-lg w-max">
          <i className="fa-solid fa-robot"></i>
            <span className="ml-2">kimhueAI</span>
          </div>
          <div>
            <div className="p-4 rounded-lg  bg-slate-100 text-slate-600">
              How i can assist you today
            </div>
          </div>
        </div>


      </div>


      <div className='p-8 flex'>
        <input
          type="text"
          className='w-full p-2 border border-gray-300 rounded-lg outline-none'
        />
        <button
          className='ml-2 py-2 px-8 bg-slate-500 text-white rounded-lg'
        >Send</button>
      </div>
    </div>
  );
};

