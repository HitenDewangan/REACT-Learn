import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product/product'

function App() {

  const products = [
    {
      title : "MAcbook Air",
      price : "$500",
      image : "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description : "This is the decription for MAcbook Air"
    },
    {
      title : "MAcbook Pro",
      price : "$700",
      image : "https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description : "This is the decription for MAcbook Pro"
    },
    {
      title : "MAcbook Mini",
      price : "$300",
      image : "https://images.unsplash.com/photo-1735810501831-40892dcfef1e?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description : "This is the decription for MAcbook Mini"
    }
  ]


  return (
    <>
      {
        products.map((product, index) => {
          return <Product 
            key={index}
            title={product.title} 
            price={product.price} 
            image={product.image} 
            description={product.description} />
        })
      }
    </>
  )






  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Helo Hiten Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

}

export default App
