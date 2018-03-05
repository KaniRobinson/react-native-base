import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, ButtonGroup } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
// import { getCurrentRoute } from '../actions/AppActions';

import style from '../styles';

class Index extends Component {

    constructor (props) {
        super(props);
        this.state = {};
        this.state.buttons = [ 'Login', 'Register' ];
        this._doButtonAction = this._doButtonAction.bind(this);
        this._redirectToLogin = this._redirectToLogin.bind(this);
        this._redirectToRegister = this._redirectToRegister.bind(this);
    }

    _doButtonAction (selectedIndex) {
        switch(selectedIndex) {
            case 0:
                this._redirectToLogin();
                break;
            case 1:
                this._redirectToRegister();
                break;
        }
    }

    _redirectToLogin() {
        Actions.login();
    }

    _redirectToRegister() {
        Actions.register();
    }

    render() {
        return (
            <ScrollView>
                <Card title='Team 8 Digital React Native Boilerplate'>
                    <ButtonGroup onPress={ this._doButtonAction } buttons={ this.state.buttons } />
                </Card>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps, {})(Index);