/* eslint-disable no-unused-vars */
import React from 'react';
import { Dimensions, View, Image, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Styles from '../../styles/styles';
import { appTheme, navigatorScreen } from '../../constants';
import { HeaderComponent, ButtonComponent, InputComponent } from '../commonComponents';
import { products, services } from '../../constants';
import styles from '../../styles/styles';

const { width, height } = Dimensions.get('screen');
class ServiceDetails extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.pageContainer}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        zIndex: 1,
                        width: '100%'
                    }}>
                        <HeaderComponent
                            backNavTitle='Home'
                            transparent
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View style={{backgroundColor: appTheme.COLORS.PLACEHOLDER,height: 300}}> 
                        <FlatList
                            horizontal
                            data={services}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <View>
                                <Image
                                    source={{ uri: item.image }}
                                    resizeMode="stretch"
                                    style={[componentStyle.imageWrapper, { zIndex: 0 }]} />
                            </View>}
                        />
                    </View>
                    <View style={[styles.CardComponentOne, componentStyle.formDiv]}>
                        <View style={componentStyle.textDiv}>
                            <Icon
                                type="FontAwesome"
                                name="user"
                                style={{
                                    fontSize: appTheme.SIZES.TEXT,
                                    color: appTheme.COLORS.ON_SECONDARY,
                                    paddingRight: 10,
                                }} />
                            <Text style={styles.cardText}>Name: Keshav</Text>
                        </View>
                        <View style={componentStyle.textDiv}>
                            <Icon
                                type="FontAwesome"
                                name="phone"
                                style={{
                                    fontSize: appTheme.SIZES.TEXT,
                                    color: appTheme.COLORS.ON_SECONDARY,
                                    paddingRight: 10,
                                }} />
                            <Text style={styles.cardText}>Number: 9876543210</Text>
                        </View>
                        <View style={componentStyle.textDiv}>
                            <Icon
                                type="FontAwesome"
                                name="calendar"
                                style={{
                                    fontSize: appTheme.SIZES.TEXT,
                                    color: appTheme.COLORS.ON_SECONDARY,
                                    paddingRight: 10,
                                }} />
                            <Text style={styles.cardText}>Start Time: July 18</Text>
                        </View>
                        <View style={componentStyle.textDiv}>
                            <Icon
                                type="FontAwesome"
                                name="map-marker"
                                style={{
                                    fontSize: appTheme.SIZES.TEXT,
                                    color: appTheme.COLORS.ON_SECONDARY,
                                    paddingRight: 10,
                                }} />
                            <Text style={styles.cardText}>Land Size: 2</Text>
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
                            <Text style={styles.cardText}>Price: 500Rs/hr</Text>
                        </View>
                        <View style={componentStyle.textDiv}>
                            <Icon
                                type="FontAwesome"
                                name="clock-o"
                                style={{
                                    fontSize: appTheme.SIZES.TEXT,
                                    color: appTheme.COLORS.ON_SECONDARY,
                                    paddingRight: 10,
                                }} />
                            <Text style={[styles.cardText,{color: appTheme.COLORS.PALLETONE}]}>Status: waiting</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={Styles.footer}>
                    <ButtonComponent
                        buttonSecondary
                        text="Cancel"
                        onClickCallBack={() => this.props.navigation.goBack()} />
                    <ButtonComponent
                        BackgroundColor={appTheme.COLORS.PRIMARY}
                        text="Back"
                        onClickCallBack={() => this.props.navigation.goBack()} />
                </View>
            </View>
        );
    }
}
const componentStyle = StyleSheet.create({
    spacer: {
        padding: 5,
    },
    formDiv: {
        marginTop: -28,
        width: '95%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        flex: 1,
    },
    imageWrapper:{
        width: width,
        height: '100%'
    },
    textDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
})
export default ServiceDetails;

