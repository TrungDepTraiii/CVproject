import React from 'react';

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }
  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
  }
  const toggleTheme = (e) => {
    if(e.target.checked) setDarkMode();
    else setLightMode();
  }
  return (
    <div className='dark_mode'>
      <label className='dark_mode_label' for='darkmode-toggle'><input className='dark_mode_input' type='checkbox' id='darkmode-toggle' onChange={toggleTheme} /><span class="slider round"></span></label>
    </div>
  )
}
export default DarkMode;