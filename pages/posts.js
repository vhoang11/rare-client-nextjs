import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getPosts } from '../api/postsData';
import PostCard from '../components/PostCard';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  const getAllThePosts = () => {
    getPosts().then(setPosts);
  };

  useEffect(() => {
    getAllThePosts();
  }, []);

  return (
    <div className="text-center my-4" style={{ alignItems: 'center' }}>
      <Head>
        <title>Posts</title>
      </Head>
      <img src="https://us.123rf.com/450wm/aquir/aquir2009/aquir200904817/154607853-good-news-banner-template-ribbon-label-sticker-sign.jpg?ver=6" alt="hero" style={{ width: '80%', marginTop: '50px' }} />
      <h1 style={{ marginTop: '50px', marginBottom: '30px' }}>Posts</h1>
      <Link href="/posts/new" passHref>
        <Button style={{ backgroundColor: '#023e8a', marginBottom: '30px', marginTop: '20px' }}>Create Post</Button>
      </Link>
      <div id="post-section">
        {posts.map((post) => (
          <PostCard key={post.id} postObj={post} onUpdate={getAllThePosts} />
        ))}
      </div>

    </div>
  );
}

export default AllPosts;
