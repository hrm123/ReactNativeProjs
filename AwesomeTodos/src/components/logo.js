import { View } from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    TSpan,
    TextPath,
    Use,
    Defs,
    Stop
} from 'react-native-svg';
import styles,{customStyles} from '../styles/common';
import React, { PropTypes } from 'react';

export default class Logo extends React.Component {

    render() {
        let LogoTextPath  = "M 50 50 A 10 10 0 0 0 60 60";
        // console.log(LogoTextPath);
        return (
            <Svg
                height={1.3*customStyles.logoHeight}
                width={customStyles.logoWidth}
            >
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2={0.6*customStyles.logoWidth} y2="0">
                        <Stop offset="0%" stopColor="black" stopOpacity="1"/>
                        <Stop offset="100%" stopColor="white" stopOpacity="1"/>
                    </LinearGradient>
                    <LinearGradient id="grad1" x1="0" y1="0" x2={0.6*customStyles.logoWidth} y2="0">
                        <Stop offset="50%" stopColor="chocolate" stopOpacity=".75"/>
                        <Stop offset="95%" stopColor="aqua" stopOpacity=".95"/>
                    </LinearGradient>
                    <LinearGradient id="earthColors"  x1="0" y1="0" x2={0.6*customStyles.logoWidth} y2={0.6*customStyles.logoHeight}>
                        <Stop offset="0%" stopColor="brown" stopOpacity="0"/>
                        <Stop offset="100%" stopColor="aqua" stopOpacity="1"/>
                    </LinearGradient>
                    <LinearGradient id="earthColors1"  x1="0%" y1="0%" x2="0%" y2="100%">
                        <Stop offset="0%" stopColor="brown" stopOpacity="1"/>
                        <Stop offset="100%" stopColor="aqua" stopOpacity="1"/>
                    </LinearGradient>
                    <Path id="lowerhalf" d={LogoTextPath} stroke="blue"/>
                </Defs>
                <G>
                <Ellipse cx={customStyles.logoWidth / 2} cy={1.3*customStyles.logoHeight/2} rx={0.3*customStyles.logoWidth} ry={0.6*customStyles.logoHeight} fill="url(#grad)"/>
                    <Text x={0.5*customStyles.logoWidth} y={0.4*customStyles.logoHeight}
                      fontFamily="sans-serif"
                      fontSize={0.25*customStyles.logoWidth}
                          textAnchor="middle"
                      fill="url(#earthColors1)"
                    >πTW</Text>

                </G>

            </Svg>
        )
    }
}

Logo.defaultProps = {
  title: 'ATD',
};

Logo.propTypes = {
  title: PropTypes.string
};
