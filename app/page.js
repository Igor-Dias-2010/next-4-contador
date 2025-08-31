"use client"
import { useState } from 'react'
export default function Home() {
  const [contador, setContador] = useState(0)

  const menos = () => setContador(contador - 1);
  const zero = () => setContador(0);
  const mais = () => setContador(contador + 1);

  const light = () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black'

  }
  const dark = () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white'
  }
  return (
    <div>
      <nav>
        <button onClick={light}>Light</button>
        <button onClick={dark}>Dark</button>
      </nav>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button onClick={menos}>-1</button>
      <button onClick={zero}>Reset</button>
      <button onClick={mais}>+1</button>
    </div>
  )
}