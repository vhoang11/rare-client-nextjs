import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deletePost } from '../api/postsData';

function PostCard({ postObj, onUpdate, isMine }) {
  const deleteThisPost = () => {
    if (window.confirm(`Delete ${postObj.title}?`)) {
      deletePost(postObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{
      width: '16rem', height: '28rem', margin: '10px', border: 'transparent',
    }}
    >
      <Card.Img variant="top" src={postObj.image_url} alt={postObj.title} style={{ height: '400px' }} />
      <Card.Body>
        {/* <Button
          className="btn-sm"
          style={{
            backgroundColor: 'transparent', borderColor: 'transparent', marginRight: '10px',
          }}
        >🤍
        </Button> */}
        <Card.Title>
          {/* {isMine
            // ? (
            //   <>
            //     {tutorialObj.favorite ? ' 💛' : ''}
            //   </>
            // )
            // : ('')} */}
          {postObj.title}
        </Card.Title>
        <p className="card-text bold">by {postObj.category_id}</p>
        <Link href={`/posts/${postObj.id}`} passHref>
          <Button variant="primary" className="m-2" style={{ backgroundColor: '#7192be', fontSize: '10px' }}>VIEW</Button>
        </Link>
        {isMine
          ? (
            <>
              <Link href={`/posts/edit/${postObj.id}`} passHref>
                <Button variant="info" style={{ backgroundColor: '#00b4d8', fontSize: '10px' }}>EDIT</Button>
              </Link>
              <Button variant="danger" onClick={deleteThisPost} className="m-2" style={{ backgroundColor: '#e9d985', borderColor: '#e9d985', fontSize: '10px' }}>
                DELETE
              </Button>
            </>

          )
          : ('')}
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image_url: PropTypes.string,
    content: PropTypes.string,
    publication_date: PropTypes.string,
    category_id: PropTypes.string,
    user_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default PostCard;
