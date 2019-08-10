import React from 'react';
import { StyleSheet, Image, View, Text, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { appTheme } from '../../constants';
import styles from '../../styles/styles';
import ButtonComponent from '../commonComponents/buttonComponet';

const renderData = {
    name: 'Keshav',
    number: 9876543210,
    image: 'https://source.unsplash.com/dS2hi__ZZMk/840x840',
}
const { width, height } = Dimensions.get('screen');

class ProfileCard extends React.Component {
    render() {
        return (
            <View style={componentStyle.profileContainer}>
                    <View
                    style={componentStyle.editBtn}>
                        <Icon
                            type="FontAwesome"
                            name="pencil"
                            style={{
                                fontSize: appTheme.SIZES.HEAD_TEXT,
                                color: appTheme.COLORS.PRIMARY,
                                paddingTop: 2,
                            }} />
                    </View>
                    <View>
                        <Image
                            source={{ uri: renderData.image }}
                            resizeMode="cover"
                            style={[styles.thumb, componentStyle.imageStyle]}
                        />
                    </View>
                    <Text style={componentStyle.text} >{renderData.name}</Text>
                    <Text style={componentStyle.text} >{renderData.number}</Text>
            </View>
        );
    }
}

const componentStyle = StyleSheet.create({
    profileContainer: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor:'#fff',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        height: '40%',
        marginBottom: 50,
        alignItems:'center',
        elevation: 2,
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
    },
    text: {
        alignSelf: 'center',
        paddingVertical: 5,
        fontSize: appTheme.SIZES.TEXT
    },
    imageStyle: {
        borderRadius: 100,
        backgroundColor: appTheme.COLORS.PLACEHOLDER,
    },
    editBtn: {
        alignSelf: 'flex-end',
        paddingHorizontal:20,
        paddingVertical:10,
    },
})

export default ProfileCard;