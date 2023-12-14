import { useCallback, useEffect, useState } from 'react';
import { PostHeader } from './components/PostHeader';
import { IPost } from '../Blog';
import { useParams } from 'react-router-dom';
import { api } from '@/api/axios';
import { PostContent } from './components/PostContent';

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const { id } = useParams();
  const getPostsDetails = useCallback(async () => {
    try {
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );
      setPostData(response.data);
    } catch (error) {
      console.log('error', error);
    }
  }, [postData]);

  useEffect(() => {
    getPostsDetails();
  }, []);

  return (
    <>
      <PostHeader postData={postData} />
      <PostContent content={postData.body} />
    </>
  );
}
