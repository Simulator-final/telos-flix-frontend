import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const style = {
  position: "absolute",
  borderRadius: "20px",
  
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid rgba(238, 238, 238, 0.05)",
  width: "1020px",
  height: "680px",
  bgcolor: "#292929",

  boxShadow:
    "0px 85px 39px rgba(0, 0, 0, 0.14), 0px 39.2981px 18.0309px rgba(0, 0, 0, 0.0941901), 0px 22.4855px 10.3169px rgba(0, 0, 0, 0.0841375), 0px 13.6485px 6.26226px rgba(0, 0, 0, 0.081129), 0px 8.22383px 3.77329px rgba(0, 0, 0, 0.0792782), 0px 4.57956px 2.10121px rgba(0, 0, 0, 0.0744361), 0px 1.96964px 0.903716px rgba(0, 0, 0, 0.0599302)",

  p: 0,
};

export default function CustomModal({ open, setOpen, content }) {
  const { isLoggedIn } = useContext(AuthContext);
  
  useEffect(() => {
    if (isLoggedIn) {
      console.log(isLoggedIn);
      setOpen(false);
    }
  }, [isLoggedIn, setOpen]);

  const handleClose = () => {
    if (!isLoggedIn) {
      setOpen(false);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{content}</Box>
      </Modal>
    </div>
  );
}
