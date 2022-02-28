import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Link,
//   Outlet,
//   useParams,
//   NavLink,
//   useNavigate,
//   useLocation
// } from "react-router-dom"


  ReactDOM.render(
    <App />
    , document.getElementById("root")
  )
// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path="/myapps" element={<Navigate replace to="/learn" />} />
//       <Route path='/learn' element={<Learn />}>
//         <Route path='courses' element={<Courses />}>
//           <Route path=':courseid' element={<CourseId />} />
//         </Route>
//         <Route path='bundles' element={<Bundles />} />
//       </Route>
//       <Route path = "dashboard" element ={<Dashboard />} />
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );

// function Home() {
//   return (
//     <div>
//       <h1>Home Route</h1>
//     </div>
//   )
// }

// function Learn() {
//   return (
//     <div>
//       <h1>Learn</h1>
//       <h4>All Courses here</h4>
//       <Link className='app__links' to="/learn/courses">Courses</Link>
//       <Link className='app__links' to="/learn/bundles" >Bundles</Link>
//       <Outlet />
//     </div>
//   )
// }

// function Courses() {
//   const courseList = ["React", "Angular", "Vue", "Javascript"]
//   const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)]
//   return (
//     <div>
//       <h1>Courses List</h1>
//       <h4>Courses Card</h4>
//       <NavLink style={({ isActive }) => {
//         return {
//           backgroundColor: isActive ? "yellow" : "purple"
//         }
//       }}
//         to={`/learn/courses/${randomCourseName}`} >
//         {randomCourseName}
//       </NavLink>
//       <NavLink to='/learn/courses/tests' className="app__links" >Tests</NavLink>
//       <Outlet />
//     </div>
//   )
// }

// function Bundles() {
//   return (
//     <div>
//       <h1>Bundles List</h1>
//       <h4>Bundles Card</h4>
//     </div>
//   )
// }

// function CourseId() {
//   const navigate = useNavigate()
//   const { courseid } = useParams()
//   return (
//     <div>
//       <h1>URL params is: {courseid} </h1>
//       <button 
//         onClick={() => {
//           navigate("/dashboard", {state: courseid})
//         }}
//         className='app__courses-price' >Price</button>
//         <Link to = "/dashboard" state = {courseid} className = "app__courses-price" >Test Link</Link>
//     </div>
//   )
// }

// function Dashboard() {
//   const location = useLocation()
//   return (
//     <div>
//       <h1>The info I have here is {location.state}</h1>
//     </div>
//   )
// }

