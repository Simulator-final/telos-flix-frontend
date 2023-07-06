import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import RateMovieModalContent from '../rateMovieModalContent';

const style = {
  background: "#3D4757",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  boxShadow: "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)",
  borderRadius: "35px",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
  boxShadow: 24,
  width: "460px",
  height: "551px",
};

export default function RateMovieModal({open, setOpen}) {

  const handleClose = () => setOpen(false);

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RateMovieModalContent/>
        </Box>
      </Modal>
    </div>
  );
}