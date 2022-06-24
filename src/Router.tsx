import { Route, Routes } from 'react-router-dom';
import { Lessons } from './pages/Lessons';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/lessons' element={<Lessons />} />
      <Route path='/lessons/lesson/:slug' element={<Lessons />} />
    </Routes>
  )
}