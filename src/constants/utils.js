import { Platform, StatusBar } from 'react-native';

export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = 50 + StatusHeight;
export const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812);