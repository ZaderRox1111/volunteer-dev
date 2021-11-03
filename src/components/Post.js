import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    
}));

const ColorButton = ({
    title,
}) => {
    const {  } = useStyles();

    return (
        <div>
          <h5>{title}</h5>
        </div>
    )
}

ColorButton.propTypes = {
    title: PropTypes.string.isRequired,
}

export default ColorButton;