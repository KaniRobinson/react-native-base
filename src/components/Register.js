import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, ButtonGroup } from 'react-native-elements'
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
        this.state.nhs_number = ''
        this.state.phone_number = ''
        this.state.password = ''
        this.state.confirm_password = ''
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
        let nhs_number = this.state.nhs_number
        let phone_number = this.state.phone_number
        let password = this.state.password
        let confirm_password = this.state.confirm_password
        this.props.userRegister(username, first_name, last_name, email, nhs_number, phone_number, password, confirm_password)
    }

    _registerButtonActions(selectedIndex) {
        switch(selectedIndex) {
            case 0:
                this._userRegister()
            case 1:
                this._redirectHome()
        }
    }

    render() {
        return (
            <ScrollView>
                <Card title='Register'>
                    <ButtonGroup onPress={ this._registerButtonActions } buttons={ this.state.buttons } />
                </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    user_data: state.AuthReducer.user_data
})

export default connect(mapStateToProps, { 
    userRegister,
    userShouldBeHere
})(Register)