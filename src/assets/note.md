1. npm create vite@latest

2. App.jsx

import './App.css'

function App() {
  return <>Hello world!</>
}

export default App

3. vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  }
})

4.  index.css

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", system-ui;
  font-weight: 400;
  font-style: normal;
}
