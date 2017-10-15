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

import React, { PropTypes } from 'react';

export default class Logo extends React.Component {
    render() {
        return (
            <Svg
                height="150"
                width="300"
            >
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
                        <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0"/>
                        <Stop offset="1" stopColor="red" stopOpacity="1"/>
                    </LinearGradient>
                </Defs>
                <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)"/>
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
