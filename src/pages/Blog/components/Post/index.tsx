import { formattedDate } from '@/utils/formattedDate';
import { IPost } from '../..';
import { PostContainer } from './styles';

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  const postDate = formattedDate(post.created_at);

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{postDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  );
}
