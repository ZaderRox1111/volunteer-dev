import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  post: {
    backgroundColor: '#faf6f9',
    border: '#000 solid 2px',
    borderRadius: '5px',
    fontFamily: 'Roboto, Arial',
  },

  posttitle: {
    textAlign: 'center',
    backgroundColor: 'red',
    fontSize: '24pt',
    padding: '10px',
    color: '#faf6f9',
  },

  postmain: {
    backgroundColor: '#faf6f9',
    padding: '10px',
    borderRadius: '0 0 5px 5px',
  },
}));

const Post = ({
  title,
}) => {
  const { post, posttitle, postmain } = useStyles();

  return (
    <div className={post}>
      <div className={posttitle}>{title}</div>
      <div className={postmain}>
        Main
      </div>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Post;
