import '../css/Post.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

import PostModal from '../components/PostModal.js';

const useStyles = makeStyles(theme => ({
  post: {
    backgroundColor: '#faf6f9',
    borderRadius: '5px',
    fontFamily: 'Roboto, Arial',
    boxShadow: '#bbb 1px 1px 5px 1px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background 400ms',
    cursor: 'pointer',
    zIndex: '1',
  },

  posttitle: {
    textAlign: 'center',
    fontSize: '24pt',
    padding: '10px',
    backgroundColor: '#faf6f9',
    borderRadius: '5px 5px 0 0',
    boxShadow: '#bbb 0 0 5px 0',
  },

  postmain: {
    backgroundColor: '#faf6f9',
    margin: '5px',
    padding: '0 10px',
    border: 'solid #bbb 1px',
    borderRadius: '5px',
    maxHeight: '500px',
    overflowY: 'hidden',
  },

  tagspan: {
    padding: '5px 10px',
    margin: '5px',
    backgroundColor: '#faf6f9',
    borderRadius: '12px',
    boxShadow: '#bbb 2px 2px 5px 0',
  },
}));

const Post = ({
  id,
  title,
  description,
  tags,
  color,
}) => {
  const { post, posttitle, postmain, tagspan } = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <div>
      <div className={post} onClick={handleOpen} id={id}>
        <div
          className={posttitle}
          style = {{ color: color }}
        >
          {title}
        </div>

        <div className='tagsdiv'>
          {tags.map(tag => {
              return <span
                className={tagspan}
                key={tag}
                style={{ border: `1px solid ${color}` }}
              >
                {tag}
              </span>
          })}
        </div>

        <div className={postmain}>
          <div className='postmaininside'>
            {description.split('\n').map(line => {
              return <p>{line}</p>
            })}
          </div>
        </div>
      </div>

      <PostModal
        open={open}
        setOpen={setOpen}
        title={title}
        tags={tags}
        description={description}
        color={color}
      />
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Post;
