
// import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navlink,
//   Link
// } from "react-router-dom"

// function App() {
//     return (
//       <div className="App">
//         <Router>
//           <Routes>
//             <Route path='/' element = {<Home />} />
//             <Route path = "about" element = {<About />} />
//             <Route path = "contact" element = {<Contact />} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }

import React, { useState, useMemo, useRef, useEffect } from "react";

const App = () => {
  // const targetRef = useRef(null)
  // const [isVisible, setIsVisible] = useState(false)

  // const callBackFunction = (entries) => {
  //   const [entry] = entries
  //   setIsVisible(entry.isIntersecting)
  // }
  // const options = useMemo(() => {
  //   return {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.3
  //   }
  // }, [])
  // useEffect(() => {
  //   const observer = new IntersectionObserver(callBackFunction, options)
  //   const currentTarget = targetRef.current
  //   if (currentTarget) observer.observe(currentTarget)
  //   return () => {
  //     if(currentTarget) observer.unobserve(currentTarget)
  //   }
  // }, [targetRef, options])
 
  
  const [isVisible, setIsVisible] = useState(false)
  const navRef = useRef() 

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)
    }, {
      threshold: 0.5
    })
    observer.observe(navRef.current)
    return () => {
      if(navRef.current) observer.unobserve(navRef.current)
    }
  }, [navRef])
  return (
    <div>
      <h1 className="header" ref={navRef} >
        <p>{
            isVisible ?
            "In Viewport" :
            "Not in viewport"
          }</p>
      </h1>
      <div className="gap" style={ {
        backgroundColor: isVisible ? "#282b35" : "white"
      }
      } ></div>
      <img src="/img/sahil.jpg" alt="Sahil"  />
    </div>
  )
}

export default App;
