import React from 'react'
import { Actions } from 'react-native-router-flux'
import { Router, Scene, Stack } from 'react-native-router-flux'

import Index from '../components/Index'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'

import HeaderComponent from '../components/elements/HeaderComponent'

export default props => (
    <Router>
        <Stack key="main" navBar={ HeaderComponent }>
            <Scene key="index" component={ Index } duration={ 0 } authRequired={ false }  />
            <Scene key="login" component={ Login } duration={ 0 } authRequired={ false }  />
            <Scene key="register" component={ Register } duration={ 0 } authRequired={ false }  />
            <Scene key="dashboard" component={ Dashboard } duration={ 0 } panHandlers={ null } authRequired={ true }  />
        </Stack>
    </Router>
)