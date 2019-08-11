/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Image, StyleSheet, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Icon } from 'native-base';
import Styles from '../../styles/styles';
import { appTheme } from '../../constants';
import { HeaderComponent, ButtonComponent, InputComponent } from '../commonComponents';
import { products, services } from '../../constants';
import styles from '../../styles/styles';


class ServiceBookingResult extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.pageContainer}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        zIndex: 1,
                        width: '100%'
                    }}>
                        <HeaderComponent
                            backNavTitle='Service Booking'
                            transparent
                            navigation={this.props.navigation}
                        />
                    </View>
                    <Image
                        source={{ uri: 'https://5.imimg.com/data5/WL/LR/AU/SELLER-654576/paddy-harvester-dasmesh-726-500x500.jpg' }}
                        resizeMode="cover"
                        style={[styles.fullWidthImage, { zIndex: 0 }]}
                    />
                    <View style={[styles.CardComponentOne, componentStyle.detailDiv]}>
                        <View style={componentStyle.textDiv}>
                            <Icon
                                type="FontAwesome"
                                name="search"
                                style={{
                                    fontSize: appTheme.SIZES.TEXT,
                                    color: appTheme.COLORS.ON_SECONDARY,
                                    paddingRight: 10,
                                }} />
                            <Text style={styles.cardText}>Found 10 Tractors</Text>
                        </View>
                        <View style={componentStyle.textDiv}>
                            <Icon
                                type="FontAwesome"
                                name="money"
                                style={{
                                    fontSize: appTheme.SIZES.TEXT,
                                    color: appTheme.COLORS.ON_SECONDARY,
                                    paddingRight: 10,
                                }} />
                            <Text style={styles.cardText}>Avg.Price 500Rs/hr</Text>
                        </View>

                    </View>
                </View>
                <View style={Styles.footer}>
                    <ButtonComponent
                        buttonSecondary
                        text="Cancel"
                        onClickCallBack={() => this.props.navigation.goBack()} />
                    <ButtonComponent
                        BackgroundColor={appTheme.COLORS.PRIMARY}
                        text="Confirm"
                        onClickCallBack={()=> this.props.navigation.popToTop()} />
                </View>
            </View>
        );
    }
}
const componentStyle = StyleSheet.create({
    spacer: {
        padding: 5,
    },
    detailDiv: {
        marginTop: -50,
        width: '95%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        flex: 1,
    },
    textDiv:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
})
export default ServiceBookingResult;

