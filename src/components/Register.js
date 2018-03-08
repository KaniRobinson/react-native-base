import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, ButtonGroup, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { userRegister, userShouldBeHere } from '../actions/AuthActions'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.state.username = ''
        this.state.first_name = ''
        this.state.last_name = ''
        this.state.email = ''
        this.state.cellphone = ''
        this.state.password = ''
        this.state.cpassword = ''
        this.state.buttons = [ 'Register', 'Cancel' ]
        this._registerButtonActions = this._registerButtonActions.bind(this)
        this._userRegister = this._userRegister.bind(this)
        this._redirectHome = this._redirectHome.bind(this)
        this.props.userShouldBeHere(this.props.authRequired)
    }

    _redirectHome() {
        Actions.pop()
    }

    _userRegister() {
        let username = this.state.username
        let first_name = this.state.first_name
        let last_name = this.state.last_name
        let email = this.state.email
        let cellphone = this.state.cellphone
        let password = this.state.password
        let cpassword = this.state.cpassword
        this.props.userRegister(username, first_name, last_name, email, cellphone, password, cpassword)
    }

    _registerButtonActions(selectedIndex) {
        switch(selectedIndex) {
            case 0:
                this._userRegister()
                break;
            case 1:
                this._redirectHome()
                break;
        }
    }

    _emailFormValidation() {
        return (
            <View>
                {this.props.registerError.User && this.props.registerError.User.email &&
                    this.props.registerError.User.email.map((message) => {
                        return (
                            <FormValidationMessage>{ message }</FormValidationMessage>
                        )
                    })
                }
            </View>
        )
    }


    _usernameFormValidation() {
        return (
            <View>
                {this.props.registerError.User && this.props.registerError.User.username &&
                    this.props.registerError.User.username.map((message) => {
                        return (
                            <FormValidationMessage>{ message }</FormValidationMessage>
                        )
                    })
                }
            </View>
        )
    }

    _firstNameFormValidation() {
        return (
            <View>
                {this.props.registerError.User && this.props.registerError.User.first_name &&
                    this.props.registerError.User.first_name.map((message) => {
                        return (
                            <FormValidationMessage>{ message }</FormValidationMessage>
                        )
                    })
                }
            </View>
        )
    }

    _lastNameFormValidation() {
        return (
            <View>
                {this.props.registerError.User && this.props.registerError.User.last_name &&
                    this.props.registerError.User.last_name.map((message) => {
                        return (
                            <FormValidationMessage>{ message }</FormValidationMessage>
                        )
                    })
                }
            </View>
        )
    }

    _cellphoneFormValidation() {
        return (
            <View>
                {this.props.registerError.User && this.props.registerError.User.cellphone &&
                    this.props.registerError.User.cellphone.map((message) => {
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
                {this.props.registerError.User && this.props.registerError.User.password &&
                    this.props.registerError.User.password.map((message) => {
                        return (
                            <FormValidationMessage>{ message }</FormValidationMessage>
                        )
                    })
                }
            </View>
        )
    }

    _cpasswordFormValidation() {
        return (
            <View>
                {this.props.registerError.User && this.props.registerError.User.cpassword &&
                    this.props.registerError.User.cpassword.map((message) => {
                        return (
                            <FormValidationMessage>{ message }</FormValidationMessage>
                        )
                    })
                }
            </View>
        )
    }

    render() {
        const UsernameValidation = this._usernameFormValidation.bind(this),
              FirstNameValidation = this._firstNameFormValidation.bind(this),
              LastNameValidation = this._lastNameFormValidation.bind(this),
              EmailValidation = this._emailFormValidation.bind(this),
              CellphoneValidation = this._cellphoneFormValidation.bind(this),
              PasswordValidation = this._passwordFormValidation.bind(this),
              CpasswordValidation = this._cpasswordFormValidation.bind(this)

        return (
            <ScrollView>
                <Card title='Register'>
                    <FormLabel>Username:</FormLabel>
                    <FormInput onChangeText={ (username) => this.setState({ username }) } />
                    <UsernameValidation></UsernameValidation>

                    <FormLabel>First Name:</FormLabel>
                    <FormInput onChangeText={ (first_name) => this.setState({ first_name }) } />
                    <FirstNameValidation></FirstNameValidation>

                    <FormLabel>Last Name:</FormLabel>
                    <FormInput onChangeText={ (last_name) => this.setState({ last_name }) } />
                    <LastNameValidation></LastNameValidation>

                    <FormLabel>Email Address:</FormLabel>
                    <FormInput type='email-address' onChangeText={ (email) => this.setState({ email }) } />
                    <EmailValidation></EmailValidation>

                    <FormLabel>Cell Phone:</FormLabel>
                    <FormInput type='phone-pad' onChangeText={ (cellphone) => this.setState({ cellphone }) } />
                    <CellphoneValidation></CellphoneValidation>

                    <FormLabel>Password:</FormLabel>
                    <FormInput secureTextEntry={ true } onChangeText={ (password) => this.setState({ password }) } />
                    <PasswordValidation></PasswordValidation>

                    <FormLabel>Confirm Password:</FormLabel>
                    <FormInput secureTextEntry={ true } onChangeText={ (cpassword) => this.setState({ cpassword }) } />
                    <CpasswordValidation></CpasswordValidation>

                    <ButtonGroup onPress={ this._registerButtonActions } buttons={ this.state.buttons } />
                </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    registerError: state.AuthReducer.registerError
})

export default connect(mapStateToProps, { 
    userRegister,
    userShouldBeHere
})(Register)