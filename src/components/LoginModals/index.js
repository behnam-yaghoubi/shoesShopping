import React from 'react';
import SigninModal from './SigninModal';
import SignUpModal from './SignUpModal';
import CodeModal from './CodeModal';
import ForgetPasswordModal from './ForgetPasswordModal';
import ChangePasswordModal from './ChangePasswordModal';

export default function Index() {
  return (
    <>
      <SigninModal />
      <SignUpModal />
      <ForgetPasswordModal />
      <ChangePasswordModal />
      <CodeModal />
    </>
  );
}
