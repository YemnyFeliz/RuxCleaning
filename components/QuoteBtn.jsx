import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../src/App.css';

function QuoteBtn() {
//   const [fullscreen, setFullscreen] = useState(true);
//   const [show, setShow] = useState(false);

//   function handleShow(breakpoint) {
//     setFullscreen(breakpoint);
//     setShow(true);
//   }

  return (
    <>
     <Button
      variant="secondary"
      href="https://app.zenmaid.com/booking-forms/J56BD/book"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get a Quote Now!
    </Button>

      {/* <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Get Your Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowY: 'auto', maxHeight: '100vh' }}>
  <iframe
    src="https://app.zenmaid.com/booking-forms/J56BD/book"
    title="Zenmaid Quote Form"
    sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation"
    style={{
        
      width: '100%',
      height: '100%', 
      border: 'none',
    }}
  ></iframe>
</Modal.Body>
      </Modal> */}
    </>
  );
}

export default QuoteBtn;
