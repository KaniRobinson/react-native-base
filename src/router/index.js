import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Index from '../components/Index';
import Login from '../components/Login';
import Register from '../components/Register';

export default props => (
    <Router>
        <Stack key="authentication">
            <Scene key="index" component={ Index } title="Homepage"/>
            <Scene key="login" component={ Login } title="Login"/>
            <Scene key="register" component={ Register } title="Register"/>
        </Stack>
    </Router>
)