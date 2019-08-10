/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'native-base';
import styles from '../../styles/styles';
import { appTheme } from '../../constants';


class HeaderComponent extends React.Component {
    render() {
        const {
            backNavTitle,
            headTitle,
            leftChild,
            children,
            transparent,
            navigation,
        } = this.props;
        return (
            <View 
            style={[styles.headerConatainer, 
                        transparent ? {
                        backgroundColor: appTheme.COLORS.SEMI_TRANPARENT,
                        } : {
                        backgroundColor: appTheme.COLORS.PRIMARY,
                        }
                    ]}>
                {leftChild ? (
                    <View style={styles.headerLeftChild}>{ leftChild }</View>
                )
                 :(
                     <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                     style={styles.headerLeftChild}>
                        <Icon
                        type="FontAwesome"
                        name="chevron-left"
                        style={{ fontSize: appTheme.SIZES.HEAD_TEXT,
                                color: appTheme.COLORS.ON_PRIMARY,
                                paddingTop: 2 }} />
                        <Text 
                            style={{
                                color: appTheme.COLORS.ON_PRIMARY,
                                fontSize: appTheme.SIZES.HEAD_TEXT,
                                paddingLeft:10}}>
                            {backNavTitle}
                        </Text>
                     </TouchableOpacity>
                 )}
                {headTitle ? (
                    <Text style={styles.headerTitle}>{ headTitle }</Text>
                ) : <View />}
                {children ? (
                    <View style={styles.headerRightChild}>
                        {children}
                    </View>
                ) : <View />}
            </View>
        );
    }
}

export default HeaderComponent;
