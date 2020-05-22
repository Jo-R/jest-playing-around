import React from 'react';
import './App.css';
import { Link } from "./Link";
import { CheckboxWithLabel } from './CheckboxWithLabel';

function App() {
  return (
    <>
    <Link page="http://www.facebook.com">Facebook</Link>
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
    </>
  );
}

export default App;
