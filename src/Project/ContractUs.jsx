 import React from "react";
import { useState } from "react";
import { db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore/lite";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const ContractUs = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [feedback, setFeedback] = useState("");
  const userCollectionRef = collection(db, "Contact");
  const HandleSubmit = async () => {
    addDoc(userCollectionRef, {
      email: email,
      feedback: feedback,
      number: number,
    });
    setEmail("");
    setNumber("");
    setFeedback("");
  };
  return (
    <div className="loginback">
      <div className="LoginForm">
        <Form>
          <h1>CONTACT US</h1>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)} />
          <br />

          <Form.Control
            type="text"
            placeholder="Enter your Number"
            onChange={(e) => setNumber(e.target.value)}/>
          <br />
          <Form.Control
            as="textarea"
            placeholder="Enter your Feedback"
            onChange={(e) => setFeedback(e.target.value)}/>

          <br/>
          <Button type="submit" size="lg" variant="danger" onClick={() => HandleSubmit()} id='sbtn'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContractUs;
