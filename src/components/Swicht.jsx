import { useRef,  useState } from "react";

const Swicht = () => {
 const [darkMode, setDarkMode] = useState(true)
const ref = useRef(null)
const handleChange =()=>{

  if (darkMode) {
    document.body.classList.add('is-light-mode')
    document.body.classList.remove('is-dark-mode')

  } else {
    document.body.classList.remove('is-light-mode')
    document.body.classList.add('is-dark-mode')
  }

  setDarkMode(!darkMode)
}

  return (
    <div className='dark-mode' >
      <p className='dark-mode-title'>Dark Mode</p>
      <input ref={ref} onChange={handleChange} type='checkbox'  className='checkbox' id='checkbox' />
      <label className='switch' htmlFor='checkbox'></label>
    </div>
  );
};

export default Swicht;
