import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getCurrentRoute } from '../actions/AppActions';

class Index extends Component {

    _getCurrentRoute() {
        let currentRoute = this.props.name;
        this.props.getCurrentRoute( currentRoute );
    }

    _emptyCurrentRouteField() {
        this.props.getCurrentRoute('');
    }

    render() {
        return (
            <View>
                <Text onPress={ () => this._emptyCurrentRouteField() }>{ this.props.currentRoute }</Text>
                <Button color='#178886' title='Get Current Route' onPress={ () => this._getCurrentRoute() } /> 
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        currentRoute: state.AppReducer.currentRoute
    }
)

export default connect(mapStateToProps, {
    getCurrentRoute
})(Index);