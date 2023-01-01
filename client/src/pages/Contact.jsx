import React from "react";

// ==== To be Refactored ==== **********

function Contact() {
  const handleSubmit = () => {};
  return (
    <section className='container my-5' id='contact'>
      <h2 className='mb-5'>Let's Get In Touch</h2>
      <form id='contact' name='contact' method='POST' onSubmit={handleSubmit}>
        <input type='hidden' name='form-name' value='contact' />
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-control'
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='company' className='form-label'>
            Company
          </label>
          <input
            type='text'
            name='company'
            id='company'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='form-control'
            placeholder='name@example.com'
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='message' className='form-label'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            className='form-control'
            rows='3'
            required
          ></textarea>
        </div>
        <button type='submit' className='btn btn-primary contact-btn'>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
