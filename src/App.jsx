import { useState } from 'react'
import './App.css'
import ControlledForm from './components/ControlledForm';
import UnControlledForm from './components/UnControlledForm';
import Request from './components/Request';

function App() {

  return (
    <>
      <ControlledForm />
      <hr/>
      <UnControlledForm />
      <hr/>
      <Request />
    </>
  )
}

export default App
