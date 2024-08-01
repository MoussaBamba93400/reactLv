import React from "react";
import { Modal, Box, Typography} from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function BookDetail({ name, authors, released, apiUrl, open, onClose }) {
  
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <div className="book-detail">
          <Typography variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="body1">
            <strong>Author:</strong> {authors.join(", ")}
          </Typography>
          <Typography variant="body1">
            <strong>Released:</strong> {new Date(released).toLocaleDateString()}
          </Typography>
        </div>
      </Box>
    </Modal>
  );
}

export default BookDetail;
