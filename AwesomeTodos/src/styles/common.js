/**
 * Created by Ramm on 10/13/2017.
 */
import {StyleSheet} from 'react-native';
import { scale, moderateScale, verticalScale} from './screen';


export const customStyles = {
    logoHeight :  150, // or can be  150 = ht, 300 = wd etc make it 2:1 ratio
    logoWidth :  300
};

export default styles = StyleSheet.create({
    bodyText: {
        fontSize: moderateScale(14),
    }
});