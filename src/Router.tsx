import { Route, Routes } from 'react-router-dom';
import { Lessons } from './pages/Lessons';
import { Subscribe } from './pages/Subscribe';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Subscribe />} />
      <Route path='/lessons' element={<Lessons />} />
      <Route path='/lessons/lesson/:slug' element={<Lessons />} />
    </Routes>
  )
}