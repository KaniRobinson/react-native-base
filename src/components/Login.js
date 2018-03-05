import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { userLogin } from '../actions/AuthActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.email = '';
        this.state.password = '';
        this._userLogin = this._userLogin.bind(this);
    }

    _userLogin() {
        let email = this.state.email;
        let password = this.state.password;
        this.props.userLogin(email, password);
    }

    render() {
        return (
            <ScrollView>
                <Card title='Login'></Card>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(Login);