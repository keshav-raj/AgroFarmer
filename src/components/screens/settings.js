import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import styles  from '../../styles/styles';
import { appTheme } from '../../constants';
import { HeaderComponent } from '../commonComponents';
import ProfileCard from '../components';


 class Settings extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.pageContainer}>
                <ProfileCard />
                <View style={[{marginTop: 0,paddingHorizontal:10}]}>
                    <View style={styles.menuList}>
                        <View style={styles.menuListText}>
                            <Icon
                                type="FontAwesome"
                                name="user"
                                style={{
                                    fontSize: appTheme.SIZES.TEXT,
                                    color: appTheme.COLORS.ON_SECONDARY,
                                    paddingRight: 10,
                                }} />
                            <Text style={styles.cardText}>Profile</Text>
                        </View>
                        <Icon
                            type="FontAwesome"
                            name="chevron-right"
                            style={{
                                fontSize: appTheme.SIZES.TEXT,
                                color: appTheme.COLORS.ON_SECONDARY
                            }} />
                    </View>
                    <View style={styles.menuList}>
                        <View style={styles.menuListText}>
                            <Icon
                                type="FontAwesome"
                                name="history"
                                style={{
                                    fontSize: appTheme.SIZES.TEXT,
                                    color: appTheme.COLORS.ON_SECONDARY,
                                    paddingRight: 10,
                                }} />
                            <Text style={styles.cardText}>Booking History</Text>
                        </View>
                        <Icon
                            type="FontAwesome"
                            name="chevron-right"
                            style={{
                                fontSize: appTheme.SIZES.TEXT,
                                color: appTheme.COLORS.ON_SECONDARY
                            }} />
                    </View>
                    <View style={[styles.menuList,{borderBottomWidth: 0}]}>
                        <View style={styles.menuListText}>
                            <Icon
                                type="FontAwesome"
                                name="phone"
                                style={{
                                    fontSize: appTheme.SIZES.TEXT,
                                    color: appTheme.COLORS.ON_SECONDARY,
                                    paddingRight: 10,
                                }} />
                            <Text style={styles.cardText}>Support</Text>
                        </View>
                        <Icon
                            type="FontAwesome"
                            name="chevron-right"
                            style={{
                                fontSize: appTheme.SIZES.TEXT,
                                color: appTheme.COLORS.ON_SECONDARY
                            }} />
                    </View>
                </View>
            </View>
        );
    }
}
export default Settings;

