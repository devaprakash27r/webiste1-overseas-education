import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import FinancialGuidance from './pages/FinancialGuidance'

import Resources from './pages/Resources'
import DimensionTool from './components/common/DimensionTool'

function App() {
  return (
    <BrowserRouter>
      <DimensionTool />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="financial-guidance" element={<FinancialGuidance />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
