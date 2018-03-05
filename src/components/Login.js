import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { userLogin } from '../actions/AuthActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.email = '';
        this.state.password = '';
        this.state.buttons = [ 'Login', 'Cancel' ];
        this._loginButtonActions = this._loginButtonActions.bind(this);
        this._userLogin = this._userLogin.bind(this);
        this._redirectHome = this._redirectHome.bind(this);
    }

    _loginButtonActions(selectedIndex) {
        switch(selectedIndex) {
            case 0:
                this._userLogin();
                break;
            case 1:
                this._redirectHome();
                break;
        }
    }

    _redirectHome() {
        Actions.pop();
    }

    _userLogin() {
        let email = this.state.email;
        let password = this.state.password;
        this.props.userLogin(email, password);
    }

    render() {
        return (
            <ScrollView>
                <Card title='Login'>
                    <ButtonGroup onPress={ this._loginButtonActions } buttons={ this.state.buttons } />
                </Card>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    token: state.AuthReducer.token
})

export default connect(mapStateToProps, { 
    userLogin
})(Login);