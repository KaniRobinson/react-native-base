import React, { Component } from 'react'
import { Header } from 'react-native-elements'

import header from '../../styles/_header'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header
                statusBarProps={ header.statusBarProps }
                leftComponent={ header.leftComponent }
                centerComponent={ header.centerComponent }
                rightComponent={ header.rightComponent }
                backgroundColor={ header.BackgroundColor }
            />
        )
    }
}