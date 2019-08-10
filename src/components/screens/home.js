/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Image, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Styles from '../../styles/styles';
import { appTheme } from '../../constants';
import { HeaderComponent, CardComponentOne } from '../commonComponents';
import { products, services, navigatorScreen } from '../../constants';
import styles from '../../styles/styles';


class Home extends React.Component {
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
                    headTitle='Agro Central'
                    navigation={this.props.navigation}
                >
                    <Icon
                        type="FontAwesome"
                        name="language"
                        style={{
                            fontSize: appTheme.SIZES.HEAD_TEXT,
                            color: appTheme.COLORS.ON_PRIMARY
                        }} />
                </HeaderComponent>
                <ScrollView>
                    <Text style={styles.mainTitle}>Services</Text>
                    <View style={{marginLeft:10}}>
                        <FlatList
                            horizontal
                            data={services}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <TouchableOpacity
                                onPress={() => navigate(navigatorScreen.ServiceBooking)}
                                style={styles.sliderImage}>
                                <Image
                                    source={{ uri: item.image }}
                                    resizeMode="cover"
                                    style={[styles.thumb]} />
                            </TouchableOpacity>}
                        />
                    </View>
                    <Text style={styles.mainTitle}>On Going Services</Text>
                    <CardComponentOne
                    renderData={products[0]} 
                    callBackOne={() => true}
                    callBackTwo={() => true}
                    callBackThree={() => true} />
                    <CardComponentOne
                        renderData={products[1]}
                        callBackOne={() => true}
                        callBackTwo={() => true}
                        callBackThree={() => true} />
                </ScrollView>
            </View>
        );
    }
}
export default Home;

