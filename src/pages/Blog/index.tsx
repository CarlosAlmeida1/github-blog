import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { PostListContainer } from './styles';

export function Blog() {
  return (
    <>
      <Profile />
      <SearchInput />
      <PostListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostListContainer>
    </>
  );
}
