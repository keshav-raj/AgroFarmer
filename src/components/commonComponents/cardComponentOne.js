import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Icon } from 'native-base';
import { appTheme } from '../../constants';
import styles from '../../styles/styles' ;
import ButtonComponent from './buttonComponet';

class CardComponentOne extends React.Component {
  render() {
    const { 
      renderData, 
      callBackOne,
      callBackTwo,
      callBackThree, } = this.props;
    return (
      <View style={styles.CardComponentOne}>
        <View style={componentStyle.imageAndDetailContaier}>
          <Image
            source={{ uri: renderData.image }}
            resizeMode="cover"
            style={[styles.thumb, componentStyle.imageStyle]}
          />
          <View style={componentStyle.detailDiv}>
            <Text style={styles.cardTextHead}>{renderData.name}</Text>
            <Text style={styles.cardText}>{renderData.number}</Text>
            <View style={componentStyle.priceAndDate}>
              <Text style={styles.cardText}>{renderData.bookingDate}</Text>
              <Text style={styles.priceText}>{renderData.price}Rs/hr </Text>
            </View>
          </View>
        </View>
        <View style={[styles.footer, componentStyle.buttonDiv ]}>
          {callBackOne ? (
            <ButtonComponent
              isSmallButton={true}
              BackgroundColor={appTheme.COLORS.PRIMARY}
              text={<Icon
                type="FontAwesome"
                name="external-link-square"
                style={{
                  fontSize: appTheme.SIZES.LABLE,
                  color: appTheme.COLORS.ON_PRIMARY,
                  paddingTop: 2
                }} />}
              onClickCallBack={callBackOne} />
          ) : null }
          {callBackTwo ? (
            <ButtonComponent
              isSmallButton={true}
              BackgroundColor={appTheme.COLORS.PRIMARY}
              text={<Icon
                type="FontAwesome"
                name="phone-square"
                style={{
                  fontSize: appTheme.SIZES.LABLE,
                  color: appTheme.COLORS.ON_PRIMARY,
                  paddingTop: 2
                }} />}
              onClickCallBack={callBackTwo} />
          ): null }
          {callBackThree ? (
            <ButtonComponent
              isSmallButton={true}
              BackgroundColor={appTheme.COLORS.PRIMARY}
              text={<Icon
                type="FontAwesome"
                name="bell"
                style={{
                  fontSize: appTheme.SIZES.LABLE,
                  color: appTheme.COLORS.ON_PRIMARY,
                  paddingTop: 2
                }} />}
              onClickCallBack={callBackThree} />
          ): null }
        </View>
      </View>
    );
  }
}

const componentStyle = StyleSheet.create({
  imageAndDetailContaier:{
    flexDirection: 'row',
  },  
  detailDiv:{
    flex: 1,
    paddingHorizontal: 10,
  },
  priceAndDate:{
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center', 
  },
  imageStyle:{
    marginTop: -16,
    marginHorizontal: 5,  
    backgroundColor: appTheme.COLORS.PLACEHOLDER,
  },
  buttonDiv:{
    marginHorizontal:5,
    marginVertical: 5,
  }
})

export default CardComponentOne;