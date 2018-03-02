import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Avatar, Badge, TouchableNative, Button, ButtonGroup, Text, Image, CheckBox, Divider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getCurrentRoute } from '../actions/AppActions';

class Index extends Component {

    constructor () {
        super();

        this.state = {
            selectedIndex: 2
        };

        this._updateIndex = this._updateIndex.bind(this);
        this._getCurrentRoute = this._getCurrentRoute.bind(this);
        this._emptyCurrentRouteField = this._emptyCurrentRouteField.bind(this);
    }

    _updateIndex (selectedIndex) {
        this.setState({
            selectedIndex
        });
    }

    _getCurrentRoute() {
        let currentRoute = this.props.name;
        this.props.getCurrentRoute( currentRoute );
    }

    _emptyCurrentRouteField() {
        this.props.getCurrentRoute('');
    }

    render() {
        const buttons = ['Hello', 'World', 'Buttons'];
        const { selectedIndex } = this.state;

        return (
            <ScrollView>
                <Card title='Avatars'>
                    <Avatar small rounded source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}} onPress={() => console.log("Works!")} activeOpacity={0.7} />
                    <Avatar medium source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}} onPress={() => console.log("Works!")} activeOpacity={0.7} />
                    <Avatar large source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}} onPress={() => console.log("Works!")} activeOpacity={0.7} />
                    <Avatar xlarge rounded source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}} onPress={() => console.log("Works!")} activeOpacity={0.7} />
                </Card>

                <Card title='Avatar with initials'>
                    <Avatar small rounded title="MT" onPress={() => console.log("Works!")} activeOpacity={0.7} />
                    <Avatar medium title="BP" onPress={() => console.log("Works!")} activeOpacity={0.7} />
                    <Avatar large title="LW" onPress={() => console.log("Works!")} activeOpacity={0.7} />
                    <Avatar xlarge rounded title="CR" onPress={() => console.log("Works!")} activeOpacity={0.7} />
                </Card>

                <Card title='Badged'>
                    <Badge value={3} textStyle={{ color: 'orange' }} />

                    <Badge containerStyle={{ backgroundColor: 'violet'}}>
                        <Text>User 1</Text>
                    </Badge>
                    <Badge onPress={() => {console.log('pressed')}} value="5" />
                    <Badge component={TouchableNative} value={10} />
                </Card>

                <Card title='Buttons'>
                    <Button title='BUTTON' />
                    <ButtonGroup onPress={ this.updateIndex } selectedIndex={ selectedIndex } buttons={ buttons } />
                </Card>

                <Card image={require('../images/cardImage.jpg')}>
                    <Text style={{marginBottom: 10}}>The idea with React Native Elements is more about component structure than actual design.</Text>
                    <Button backgroundColor='#03A9F4' fontFamily='Lato' buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}} title='VIEW NOW' />
                </Card>

                <Divider style={{ backgroundColor: 'blue' }} />

            </ScrollView>
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