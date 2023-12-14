import React, { useCallback, useEffect, useState } from 'react';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { PostListContainer } from './styles';
import { api } from '@/api/axios';

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  created_at: string;
  number: number;
  body: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        const response = await api.get(
          `https://api.github.com/repos/${username}/${repoName}/issues?q=${query}%20label:published`
        );
        setPosts(response.data);
      } catch {
        console.log('error');
      }
    },
    [username, repoName]
  );

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      <PostListContainer>
        {posts.map((post) => (
          <Post key={post.number} post={post} />
        ))}
      </PostListContainer>
    </>
  );
}
