import '../css/Post.css';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  post: {
    backgroundColor: '#faf6f9',
    borderRadius: '5px',
    fontFamily: 'Roboto, Arial',
    boxShadow: '#bbb 1px 1px 5px 1px',
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
    padding: '10px',
    borderRadius: '0 0 5px 5px',
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
  title,
  description,
  tags,
}) => {
  const { post, posttitle, postmain, tagspan } = useStyles();

  const getRandomColor = colorsArr => {
    return colorsArr[Math.floor(Math.random() * colorsArr.length)];
  }

  const colors = [
    "#ef5350",
    "#e91e63",
    "#ab47bc",
    "#7e57c2",
    "#1e88e5",
    "#4fc3f7",
    "#26c6da",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#ffb300",
    "#ff9800",
    "#ff7043",
  ]

  const color = getRandomColor(colors);

  return (
    <div className={post}>
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
        {description}
      </div>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
}

export default Post;
