import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { LoginHeader, Welcome } from '../Components';
import { AuthFooter, Conditions, Container } from '../shared';
import type { LoginFormProps } from './login-form';
import { LoginForm } from './login-form';

export default function LoginShared() {
  const onSubmit: LoginFormProps['onSubmit'] = () => {};
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className={`flex-1  items-center justify-center  bg-secondary`}
    >
      <LoginHeader />
      <ScrollView>
        <Container style="flex-1 items-start justify-start w-full px-8 py-10 gap-5 ">
          <Welcome />
          <LoginForm onSubmit={onSubmit} />
          <Conditions />
          <AuthFooter />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
