import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';
export default function ContactMe() {

  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const[message, setMessage]=useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(name.length===0){
      alert("Name length is 0");
    }
    else if(message.length===0){
      alert("Message length is 0")
    }

    emailjs.send('service_f7d62wj','template_yi47kgn', {from_name: name, from_email:email, message:message}, 'qC_5Ybt8BjIFNAX7j')
    .then((responses)=>{
      console.log('Email sent successfully')
    })
    .catch((error)=>{
      console.error('Error sending email:', error);
    });

  };





  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send Message</button>
    </form>
    </div>
  )
}
