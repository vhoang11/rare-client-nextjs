import Head from 'next/head';
// import { useEffect, useState } from 'react';

function Home() {
  // const [posts, setPosts] = useState([]);

  // const getAllPosts = () => {
  //   getPosts().then(setPosts);
  // };

  // useEffect(() => {
  //   getAllPosts();
  // }, []);

  return (
    <div className="d-flex flex-wrap text-center my-4" style={{ marginTop: '100px' }}>
      <Head>
        <title>Rare Publishing</title>
      </Head>
      <img
        src="https://i0.wp.com/bluedoormedia.co/wp-content/uploads/2020/09/good-news.jpg?fit=750%2C400&ssl=1"
        alt="hero"
        style={{ width: '100%' }}
      />
      <div>
        <h2 id="quote">“Do your little bit of good where you are; it is those little bits of good put together that overwhelm the world.”</h2>
        <p>- Desmond Tutu</p>
      </div>
      {/* <div id="home-categories">
        {categories.map((category) => (
          <CategoryCard key={category.firebaseKey} categoryObj={category} onUpdate={getAllCategories} />
        ))}
      </div> */}

    </div>
  );
}

export default Home;
