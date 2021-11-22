import '../css/PostModal.css';
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  post: {
    backgroundColor: '#faf6f9',
    fontFamily: 'Roboto, Arial',
    fontSize: '16pt',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    bgcolor: 'background.paper',
    border: '1px solid black',
    borderRadius: '10px',
    boxShadow: '#555 0 0 20px 0',
    p: 4,
  },

  posttitle: {
    textAlign: 'center',
    fontSize: '36pt',
    padding: '15px',
    backgroundColor: '#faf6f9',
    borderRadius: '10px 10px 0 0',
    boxShadow: '#555 0 0 5px 0',
  },

  postmain: {
    backgroundColor: '#faf6f9',
    margin: '5px 25px 25px',
    maxHeight: '70vh',
    padding: '0 10px',
    border: 'solid #bbb 1px',
    borderRadius: '5px',
    overflowY: 'auto',
  },

  tagspan: {
    padding: '5px 10px',
    margin: '5px',
    backgroundColor: '#faf6f9',
    borderRadius: '15px',
    boxShadow: '#bbb 2px 2px 5px 0',
  },
}))

const PostModal = ({
  open,
  setOpen,
  title,
  description,
  tags,
  color,
}) => {
  const { post, posttitle, postmain, tagspan } = useStyles();

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={post}>
            <div
              className={posttitle}
              style = {{ color: color }}
            >
              {title}
            </div>

            <div className='tagsdivmodal'>
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
              <div>
                {description.split('\n').map(line => {
                  return <p>{line}</p>
                })}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

PostModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default PostModal;
