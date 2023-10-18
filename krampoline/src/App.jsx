import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div>
      <h1>React + VITE Example + vivi 화이팅!</h1>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path={ "/" } element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ "/about" } element={<About />} />
          <Route path={ "/dashboard" } element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <nav>
       <button><Link to={ "/" }>Home</Link> </button>
       <button><Link to={ "/about" }>About</Link></button>
       <button><Link to={ "/dashboard" }>Dashboard</Link></button>
       <button><Link to={ "/nothing-here"}>Nothing Here</Link></button>
      </nav>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
      <Outlet />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}