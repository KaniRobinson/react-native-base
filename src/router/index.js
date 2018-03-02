import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Index from '../components/Index';

export default props => (
    <Router>
        <Stack key="root">
            <Scene key="index" component={ Index } title="Homepage"/>
        </Stack>
    </Router>
)