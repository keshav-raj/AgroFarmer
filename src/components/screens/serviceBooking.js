/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Image, StyleSheet, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Icon } from 'native-base';
import Styles from '../../styles/styles';
import { appTheme, navigatorScreen } from '../../constants';
import { HeaderComponent, ButtonComponent, InputComponent } from '../commonComponents';
import { products, services } from '../../constants';
import styles from '../../styles/styles';


class ServiceBooking extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.pageContainer}>
                <View style={{flex:1}}>
                    <View style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        zIndex:1,
                        width:'100%'}}>
                        <HeaderComponent
                            backNavTitle='Home'
                            transparent
                            navigation={this.props.navigation}
                        />
                    </View>
                    <Image
                        source={{ uri: 'https://5.imimg.com/data5/WL/LR/AU/SELLER-654576/paddy-harvester-dasmesh-726-500x500.jpg' }}
                        resizeMode="cover"
                        style={[styles.fullWidthImage,{zIndex:0}]}
                    />
                    <KeyboardAvoidingView style={[styles.CardComponentOne, componentStyle.formDiv]}>
                        <Text style={[styles.cardText,componentStyle.spacer]}>Loacation: Pallavaram,Chennai</Text>
                        <InputComponent
                            onChangeCallBack={() => true}
                            placeholder="Land Size"
                            isTypeNumeric
                        />
                    </KeyboardAvoidingView>
                </View>
                <View style={Styles.footer}>
                    <ButtonComponent
                        buttonSecondary
                        text="Cancel"
                        onClickCallBack={() => this.props.navigation.goBack()} />
                    <ButtonComponent
                        BackgroundColor={appTheme.COLORS.PRIMARY}
                        text="Book"
                        onClickCallBack={() => navigate(navigatorScreen.ServiceBookingResult)} />
                </View>
            </View>
        );
    }
}
const componentStyle = StyleSheet.create({
    spacer: {
        padding: 5,
    },
    formDiv:{
        marginTop: -50,
        width: '95%',
        paddingHorizontal: 10,
        paddingVertical:20,
        flex:1,
    }
})
export default ServiceBooking;

