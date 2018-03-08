import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { userShouldBeHere, userLogout } from '../actions/AuthActions'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.props.userShouldBeHere(this.props.authRequired)
        this._userLogout = this._logoutUser.bind(this)
    }

    _logoutUser() {
        this.props.userLogout()
    }

    render() {
        return (
            <ScrollView>
                <Card title='Dashboard'>
                    <Text onPress={ this._userLogout }>Logout</Text>
                </Card>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {
    userShouldBeHere,
    userLogout
})(Dashboard)