// modal for displaying API content - onclick focuses and brings up additional information on the tile. Props include img, title, date, explanation
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import './styles/modal_style.css'

import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 600,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',


};

export default function PinModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>{props.title}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='modal_box'
            >
                <Box sx={style}>
                    <img 
                    className='modal_image' 
                    src={props.img} 
                    onClick={() => window.open(props.img)}
                    ></img>
                    <Typography className='modal_title' id="modal-modal-title" variant="h6" component="h2" sx={{ color: 'white' }}>
                        {props.title}
                    </Typography>
                    <Typography
                        className='modal_description' id="modal-modal-description" sx={{ mt: 2, color: 'white' }}>
                        <div className='scrolling_text'> {props.explanation}</div>

                    </Typography>
                </Box>
            </Modal>
        </div>
    );

}