import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList/PostList';
//import { PostInfo } from './components/PostInfo/PostInfo';
//import { CommentList } from './components/CommentList/CommentList'
//import { CommentInfo } from './components/CommentInfo/CommentInfo';

export const posts = postsFromServer.map(post => ({
  ...post,
}));

export const comments = commentsFromServer.map(comment => ({
  ...comment,
}));

export const users = usersFromServer.map(user => ({
  ...user,
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList />
  </section>
);
