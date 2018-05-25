import React from 'react'; //imr
import { View, StatusBar } from 'react-native'; //imrn

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

export default () => (
    <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
    </Container>
);
