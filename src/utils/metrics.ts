import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const isIOS = Platform.OS === 'ios';

export {width, height, isIOS};
