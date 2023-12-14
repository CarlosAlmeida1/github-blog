import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/defaultLayout';
import { Blog } from './pages/Blog';
import { Post } from './pages/Post';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Blog />} />
        <Route path='/post/:id' element={<Post />} />
      </Route>
    </Routes>
  );
}
