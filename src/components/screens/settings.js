import React from 'react';
import { View, Image } from 'react-native';
import { Text, Input } from 'native-base';
import Styles  from '../../styles/styles';
import ButtonComponent from '../commonComponents';
import { appTheme } from '../../constants';

 class Settings extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.pageContainer}>
                <View style={Styles.loginContentWrapper}>
                    <Image
                        source={require('../../../assets/images/Logo.png')}
                        resizeMode="cover"
                        style={styles.thumb}
                    />
                    <Text style={{...Styles.mrTop5, ...Styles.brandStyle}} size={appTheme.SIZES.HEAD_TEXT} color={appTheme.COLORS.HEAD_TEXT}>
                       Agro Central
                    </Text>
                    <Text style={{...Styles.mrTop5, ...Styles.brandStyle}} size={appTheme.SIZES.TEXT} muted>
                        Settings
                    </Text>
                </View>
            </View>
        );
    }
}
export default Settings;

