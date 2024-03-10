import {Routes, Route, BrowserRouter} from "react-router-dom"

import Home from './pages/Home/index'
import Products from './pages/Products/index'
import Settings from './pages/Settings/index'
import Analytics from './pages/Analytics/index'
// import Users from './pages/Users'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          {/* <Route path="/users" exact element={<Users />} /> */}
          <Route path="/settings" exact element={<Settings />} />
          <Route path="/analytics" exact element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
