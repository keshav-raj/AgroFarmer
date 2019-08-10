import React from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';
import Styles  from '../../styles/styles';
import { appTheme } from '../../constants';
import { HeaderComponent } from '../commonComponents';


 class Store extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.pageContainer}>
                <HeaderComponent
                    leftChild={<Icon
                        type="FontAwesome"
                        name="amazon"
                        style={{
                            fontSize: appTheme.SIZES.HEAD_TEXT,
                            color: appTheme.COLORS.ON_PRIMARY
                        }} />}
                    navigation={this.props.navigation}
                    headTitle='Agro Central'
                >
                    <Icon
                        type="FontAwesome"
                        name="amazon"
                        style={{
                            fontSize: appTheme.SIZES.HEAD_TEXT,
                            color: appTheme.COLORS.ON_PRIMARY
                        }} />
                </HeaderComponent>
            </View>
        );
    }
}
export default Store;

