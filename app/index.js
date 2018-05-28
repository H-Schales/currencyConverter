import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',

    $white: '#fff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',

    //$outline: 1, --> show outline in Simulator...helps to debug the Views
});

export default () => <CurrencyList />;