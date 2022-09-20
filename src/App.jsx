import { useEffect, useState } from 'react';
import './App.css';
import useHook from './hooks/useHook';
import useFatchData from './hooks/useFatchData';

function App() {
  const users = useFatchData(
    'https://jsonplaceholder.typicode.com/users',
    (data) =>
      data.map((item) => ({
        id: item.id,
        name: item.name,
      }))
  );
  const posts = useFatchData(
    'https://jsonplaceholder.typicode.com/posts',
    (data) =>
      data.slice(0, 10).map((item) => ({ id: item.id, title: item.title }))
  );
  const comments = useFatchData(
    'https://jsonplaceholder.typicode.com/comments',
    (data) =>
      data.slice(0, 10).map((item) => ({ id: item.id, name: item.name }))
  );
  const {
    count: count1,
    incBtn: incBtn1,
    decBtn: decBtn1,
  } = useHook({ initial: 10, uperBound: 20 });
  const {
    count: count2,
    incBtn: incBtn2,
    decBtn: decBtn2,
  } = useHook({ initial: 5, uperBound: 15 });
  const {
    count: count3,
    incBtn: incBtn3,
    decBtn: decBtn3,
  } = useHook({ initial: 1, uperBound: 10 });

  const Counter = ({ count, incBtn, decBtn }) => {
    return (
      <div>
        <span>
          <button onClick={incBtn}>+</button>
          {count}
          <button onClick={decBtn}>-</button>
        </span>
      </div>
    );
  };

  return (
    <div>
      <div style={{ marginLeft: '15rem' }}>
        <h1>Custom Hooks</h1>
        <Counter count={count1} incBtn={incBtn1} decBtn={decBtn1} />
        <Counter count={count2} incBtn={incBtn2} decBtn={decBtn2} />
        <Counter count={count3} incBtn={incBtn3} decBtn={decBtn3} />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          h1: {
            item: 'center',
          },
        }}
      >
        <div>
          <h2>User</h2>
          <hr />
          {users.loding && <p>Loding...</p>}
          {users.error && <h4>{users.error}</h4>}
          {users.data?.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </div>
        <div>
          <h2>Posts</h2>
          <hr />
          {posts.loding && <p>Loding...</p>}
          {posts.error && <h4>{posts.error}</h4>}
          {posts.data?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </div>
        <div>
          <h2>Comments</h2>
          <hr />
          {comments.loding && <p>Loding...</p>}
          {comments.error && <h4>{comments.error}</h4>}
          {comments.data?.map((post) => (
            <li key={post.id}>{post.name}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
