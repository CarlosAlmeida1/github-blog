import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/defaultLayout';
import { Blog } from './pages/Blog';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Blog />} />
      </Route>
    </Routes>
  );
}
