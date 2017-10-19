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
    Use,
    Defs,
    Stop
} from 'react-native-svg';
import styles,{customStyles} from '../styles/common';
import React, { PropTypes } from 'react';

export default class Logo extends React.Component {

    render() {
        debugger;
        return (
            <Svg
                height={1.3*customStyles.logoHeight}
                width={customStyles.logoWidth}
            >
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2={0.6*customStyles.logoWidth} y2="0">
                        <Stop offset="50%" stopColor="black" stopOpacity=".75"/>
                        <Stop offset="95%" stopColor="white" stopOpacity=".80"/>
                    </LinearGradient>
                    <LinearGradient id="grad1" x1="0" y1="0" x2={0.6*customStyles.logoWidth} y2="0">
                        <Stop offset="50%" stopColor="white" stopOpacity=".75"/>
                        <Stop offset="95%" stopColor="black" stopOpacity=".95"/>
                    </LinearGradient>
                </Defs>
                <G>
                <Ellipse cx={customStyles.logoWidth / 2} cy={1.3*customStyles.logoHeight/2} rx={0.3*customStyles.logoWidth} ry={0.6*customStyles.logoHeight} fill="url(#grad)"/>
                    <Text x={0.5*customStyles.logoWidth} y={0.4*customStyles.logoHeight}
                      fontFamily="sans-serif"
                      fontSize={0.3*customStyles.logoWidth}
                          textAnchor="middle"
                      fill="url(#grad1)"
                    >ATD</Text>
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
