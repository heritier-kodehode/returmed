import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import emailjs from '@emailjs/browser';
import { Context } from '../../App';

import {
  SectionContainerContactUs,
  SectionHeader,
  SectionTitleContactUs,
  SectionIntroContactUs,
  Form,
  Label,
  FormInput,
  FormTextArea,
  FormSubmitBtn,
  Comfirmationmodal,
  ConfirmationText,
  ErrorModalText,
  Errormodal,
  ErrorCloseBtn,
} from '../../components/styled/styled';

function Contactus() {
  const location = useLocation();
  const messageEmailFooter = location.state && location.state.message;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('' || messageEmailFooter);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showMsgErrorModal, setShowMsgErrorModal] = useState(false);
  const [showNameErrorModal, setShowNameErrorModal] = useState(false);
  const [showEmailErrorModal, setEmailErrorModal] = useState(false);
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
    // Regular expressions to validate name and email
    const nameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(userName) || userName.length <= 0) {
      setShowNameErrorModal(true);
      setTimeout(() => {
        setShowNameErrorModal(false);
      }, 3000);
      return;
    } else if (!emailRegex.test(userEmail) || userEmail.length <= 0) {
      setEmailErrorModal(true);
      setTimeout(() => {
        setEmailErrorModal(false);
      }, 3000);

      return;
    } else if (message.length <= 0) {
      setShowMsgErrorModal(true);
      setTimeout(() => {
        setShowMsgErrorModal(false);
      }, 3000);
      return;
    }

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
    <SectionContainerContactUs>
      <SectionHeader>
        <SectionTitleContactUs>{langData.contactUs[0]}</SectionTitleContactUs>
      </SectionHeader>
      {showModal && (
        <Comfirmationmodal>
          <ConfirmationText>Thanks for the message</ConfirmationText>
        </Comfirmationmodal>
      )}
      {showNameErrorModal && (
        <Errormodal>
          <ErrorModalText>
            Error, Your Name should only include [a-z][A-Z]
          </ErrorModalText>
          <ErrorCloseBtn onClick={() => setShowNameErrorModal(false)}>
            X
          </ErrorCloseBtn>
        </Errormodal>
      )}
      {showEmailErrorModal && (
        <Errormodal>
          <ErrorModalText>Error, Please write a valid Email!</ErrorModalText>
          <ErrorCloseBtn
            onClick={() => {
              setEmailErrorModal(false);
            }}
          >
            X
          </ErrorCloseBtn>
        </Errormodal>
      )}
      {showMsgErrorModal && (
        <Errormodal>
          <ErrorModalText>Error,Please Write Your Message!</ErrorModalText>
          <ErrorCloseBtn onClick={() => setShowMsgErrorModal(false)}>
            X
          </ErrorCloseBtn>
        </Errormodal>
      )}
      <SectionIntroContactUs>
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
      </SectionIntroContactUs>
    </SectionContainerContactUs>
  );
}

export default Contactus;
