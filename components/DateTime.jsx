import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import mySelect from './mySelect';

function DateTime() {
  const [value, onChange] = useState(new Date());
  const today = new Date()
  const currentYear = today.getFullYear()
  const currenMonth= today.getMonth()
  const currentDay = today.getDay()
  const currentDate = today.getDate()
  const currentHour = today.getHours()
  const hours = Array.from({length:12},(value,index) => index)
  const minutes = Array.from({length:4},(value,index) => index*15)
  const meridiem = ["AM","PM"]
  const months = ["Jan", "Feb" , "March" , "April" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]
  const dates = Array.from({length: 31} , (value , index) => index+1)
  const years = Array.from({length:5},(value=currentYear,index) => value+index)
  return (
    <div className='flex flex-col gap-2 text-lg '>
        <h1 className='text-slate-700 text-lg '>Schedule:</h1>
        <div className='flex gap-3'>
        <div className='flex  bg-white p-2 rounded-lg'>
            <select className='bg-white px-6 py-2 over'>
                {dates && dates.map((date,index) => (<option key={index} value={date}>{date}</option>))}
            </select>
            <select  className='bg-white px-6 py-2'>
                {months && months.map((month,index) => (<option key={index} value={month}>{month}</option>))}
            </select>
            <select className='bg-white px-6 py-2'>
                {years && years.map((year,index) => (<option key={year} value={year}>{year}</option>))}
            </select>
        </div>
        <div className='w-72 flex bg-white p-2 rounded-lg'>
            <select className='bg-white px-6 py-2'>
                {hours && hours.map((hour,index) => (<option key={hour} value={hour}>{hour}</option>))}
            </select>
            <select className='bg-white px-6 py-2'>
                {minutes && minutes.map((minute,index) => (<option key={minute} value={minute}>{minute}</option>))}
            </select>
            <select className='bg-white px-6 py-2'>
                {meridiem && meridiem.map((merid,index) => (<option key={merid} value={merid}>{merid}</option>))}
            </select>
            
        </div>
        <input type='date'></input>
        </div>
    </div>
  );
}

export default DateTime