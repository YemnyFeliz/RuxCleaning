import React from 'react';
import Button from 'react-bootstrap/Button';
import '../src/App.css';

function QuoteBtn() {

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
    </>
  );
}

export default QuoteBtn;
