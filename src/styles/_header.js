
import Variable from './_variables'

export default Header = {
    BackgroundColor: Variable.header.backgroundColor,
    statusBarProps: {
        animated: true,
        barStyle: 'light-content',
        hidden: false,
        backgroundColor: Variable.header.backgroundColor,
        translucent: false,
        networkActivityIndicatorVisible: true,
        showHideTransition: 'fade'
    },
    leftComponent: {
        icon: 'menu',
        color: Variable.header.textColor
    },
    centerComponent: { 
        text: 'Team8Digital', 
        style: { 
            color: Variable.header.textColor
        } 
    },
    rightComponent: {}
}