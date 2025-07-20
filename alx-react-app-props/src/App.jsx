import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  )
}

export default App;
