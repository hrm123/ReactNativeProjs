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
                height={customStyles.logoHeight}
                width={customStyles.logoWidth}
            >
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2={0.6*customStyles.logoWidth} y2="0">
                        <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0"/>
                        <Stop offset="1" stopColor="red" stopOpacity="1"/>
                    </LinearGradient>
                </Defs>
                <Text x={customStyles.logoWidth/2} y={customStyles.logoHeight/2}
                font-family="sans-serif"
                font-size="20px"
                text-anchor="middle"
                fill="red">ATD!</Text>
                <Path d="m 50 50 50 0 0 50 z" fillColor="blue"/>
                <Ellipse cx={customStyles.logoWidth / 2} cy={customStyles.logoHeight/2} rx={0.3*customStyles.logoWidth} ry={0.37*customStyles.logoHeight} fill="url(#grad)"/>
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
