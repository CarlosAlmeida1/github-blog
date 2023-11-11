import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/defaultLayout';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}></Route>
    </Routes>
  );
}
