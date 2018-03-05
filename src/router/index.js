import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Index from '../components/Index';
import Login from '../components/Login';
import Register from '../components/Register';

import HeaderComponent from '../components/elements/HeaderComponent';


export default props => (
    <Router>
        <Stack key="authentication" navBar={ HeaderComponent } >
            <Scene key="index" component={ Index } />
            <Scene key="login" component={ Login } />
            <Scene key="register" component={ Register } />
        </Stack>
    </Router>
)