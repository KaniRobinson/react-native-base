import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ScrollView>
                <Card title='Dashboard'></Card>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(Dashboard);