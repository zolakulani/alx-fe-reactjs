import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import './App.css'
import UserContext from './components/UserContext';

function App() {
  const userData = { name: "Alice", age: "25", bio: "Loves hiking and photography" };

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
      <Footer />
    </>
  )
}

export default App;
