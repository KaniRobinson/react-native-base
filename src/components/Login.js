import React, { Component } from 'react'
import { ScrollView, View, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, ButtonGroup, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { userLogin, userShouldBeHere } from '../actions/AuthActions'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.state.email = ''
        this.state.password = ''
        this.state.buttons = [ 'Login', 'Cancel' ]
        this._loginButtonActions = this._loginButtonActions.bind(this)
        this._userLogin = this._userLogin.bind(this)
        this._redirectHome = this._redirectHome.bind(this)
        this.props.userShouldBeHere(this.props.authRequired)
    }

    _loginButtonActions(selectedIndex) {
        switch(selectedIndex) {
            case 0:
                this._userLogin()
                break;
            case 1:
                this._redirectHome()
                break;
        }
    }

    _redirectHome() {
        Actions.pop()
    }

    _userLogin() {
        let email = this.state.email
        let password = this.state.password
        this.props.userLogin(email, password)
    }

    _emailFormValidation() {
        return (
            <View>
                {this.props.loginError.User && this.props.loginError.User.email &&
                    this.props.loginError.User.email.map((message) => {
                        return (
                            <FormValidationMessage>{ message }</FormValidationMessage>
                        )
                    })
                }
            </View>
        )
    }

    _passwordFormValidation() {
        return (
            <View>
                {this.props.loginError.User && this.props.loginError.User.password &&
                    this.props.loginError.User.password.map((message) => {
                        return (
                            <FormValidationMessage>{ message }</FormValidationMessage>
                        )
                    })
                }
            </View>
        )
    }

    render() {
        const EmailValidation = this._emailFormValidation.bind(this),
              PasswordValidation = this._passwordFormValidation.bind(this)

        return (
            <ScrollView>
                <Card title='Login'>
                    <FormLabel>Email/Username:</FormLabel>
                    <FormInput onChangeText={ (email) => this.setState({ email }) } />
                    <EmailValidation></EmailValidation>
                    <FormLabel>Password:</FormLabel>
                    <FormInput secureTextEntry={ true } onChangeText={ (password) => this.setState({ password }) } />
                    <PasswordValidation></PasswordValidation>
                    <ButtonGroup onPress={ this._loginButtonActions } buttons={ this.state.buttons } />
                </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    loginError: state.AuthReducer.loginError
})

export default connect(mapStateToProps, { 
    userLogin,
    userShouldBeHere
})(Login)