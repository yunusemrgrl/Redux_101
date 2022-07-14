import React from 'react';

function TodoMain() {
  return (
    <section className='main'>
      <textarea className='textarea' placeholder='Enter your note here' />
      <div className='main-footer'>
        <div className='categories'>
          <span
            className='category'
            style={{ backgroundColor: 'yellow' }}
          ></span>
          <span
            className='category'
            style={{ backgroundColor: 'purple' }}
          ></span>
          <span className='category' style={{ backgroundColor: 'aqua' }}></span>
          <span
            className='category'
            style={{ backgroundColor: 'brown' }}
          ></span>
          <span
            className='category'
            style={{ backgroundColor: 'orange' }}
          ></span>
        </div>
        <div className='footer-btn'>
          <button type='submit' className='btn addBtn'>
            ADD
          </button>
        </div>
      </div>
    </section>
  );
}

export default TodoMain;
