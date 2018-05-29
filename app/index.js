import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Options from './screens/Options';
import Navigator from './config/routes';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',


    $white: '#fff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',

    //$outline: 1, --> show outline in Simulator...helps to debug the Views
});

export default () => <Navigator />;