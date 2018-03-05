import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { userRegister } from '../actions/AuthActions';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.email = '';
        this.state.password = '';
        this._userRegister = this._userRegister.bind(this);
    }

    _userRegister() {
        let email = this.state.email;
        let password = this.state.password;
        this.props.userRegister(email, password);
    }

    render() {
        return (
            <ScrollView>
                <Card title='Register'></Card>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(Register);