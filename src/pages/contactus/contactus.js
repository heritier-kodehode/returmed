import React, { useContext, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Context } from '../../App';
import styled from 'styled-components';

const SectionContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 7rem auto 0 auto;
  @media (min-width: 990px) {
    margin-top: 100px;

    flex-wrap: wrap;
  }
`;

const SectionHeader = styled.header`
  width: 100%;
  background: #385d6d;

  @media (min-width: 990px) {
    margin-top: 0;
  }
`;

const SectionTitle = styled.h2`
  letter-spacing: normal;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-size: calc(29px + (24 - 16) * (100vw - 400px) / (800 - 400));

  padding: 2rem 0;
  text-decoration: underline;
  color: white;
`;

const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #385d6d;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;
const Label = styled.label`
  color: white;
  margin: 0.5rem 0;
  font-size: 1.6rem;
`;

const FormInput = styled.input`
  width: 25rem;
  padding: 0.5rem;
  background-color: #138851;
  color: white;
  border: none;
  outline: none;
`;

const FormTextArea = styled.textarea`
  width: 25rem;
  resize: none;
  max-width: 25rem;
  background-color: #138851;
  color: white;
  outline: none;
  padding: 0.5rem;
  height: 15rem;
  font-size: 1.3rem;
`;
const FormSubmitBtn = styled.button`
  width: 25rem;
  margin: 1rem 0;
  padding: 1rem 0;
  border: 2px solid white;
  font-size: 2rem;
  background-color: #385d6d;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #138851;
    font-style: oblique;
  }
  &:active {
    font-style: normal;
  }
`;

const Comfirmationmodal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const ConfirmationText = styled.p``;

function Contactus() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { langData } = useContext(Context);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const form = useRef();
  function clearForm() {
    setUserEmail('');
    setUserName('');
    setMessage('');
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        form.current,
        'fGMgwi0heYTdBMZig'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    clearForm();
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{langData.contactUs[0]}</SectionTitle>
      </SectionHeader>
      {showModal && (
        <Comfirmationmodal>
          <ConfirmationText>Thanks for the message</ConfirmationText>
        </Comfirmationmodal>
      )}
      <SectionIntro>
        <Form ref={form} onSubmit={sendEmail}>
          <Label htmlFor='username'>{langData.contactUs[1]} </Label>
          <FormInput
            id='username'
            name='user_name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <Label htmlFor='email'>{langData.contactUs[2]}</Label>
          <FormInput
            id='email'
            name='user_email'
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <Label htmlFor='message'>{langData.contactUs[3]}</Label>
          <FormTextArea
            id='message'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></FormTextArea>
          <FormSubmitBtn>{langData.contactUs[4]}</FormSubmitBtn>
        </Form>
      </SectionIntro>
    </SectionContainer>
  );
}

export default Contactus;
