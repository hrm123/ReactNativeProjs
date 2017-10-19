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
                <Rect x="1" y="0" width="30" height="30" fill="purple"/>
                <Rect x="3" y="5" width="30" height="30" fill="blue"/>
                <Rect x="5" y="10" width="30" height="30" fill="green"/>
                <Rect x="7" y="15" width="30" height="30" fill="yellow"/>
                <Rect x="9" y="20" width="30" height="30" fill="red"/>
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
