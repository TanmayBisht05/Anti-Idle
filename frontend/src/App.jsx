// once the pages are coded, decomment the following code, and remove the existing one at the bottom 

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import ChatPage from './pages/ChatPage';
// import ProfilePage from './pages/ProfilePage';
// import QueryUploadPage from './pages/QueryUploadPage';
// import SettingsPage from './pages/SettingsPage';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/chat" element={<ChatPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/upload" element={<QueryUploadPage />} />
//         <Route path="/settings" element={<SettingsPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import AuthPage from './pages/signup'
// import { Route, Routes } from 'react-router-dom'
import LScomponent from "./pages/Login-Signup/Login-Signup_component"
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//       {/* <AuthForm></AuthForm> */}
//       <Routes>
//       <Route path="/auth" element={<AuthPage />} />
//       </Routes>
//     </>
//   )
// }

function App() {
  return (
    <div className="background-blur">
    <LScomponent/>
    </div>
  );
}



export default App
