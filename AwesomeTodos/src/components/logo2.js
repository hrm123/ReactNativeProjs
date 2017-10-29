/**
 * Created by Ramm on 10/21/2017.
 */
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

export default class Logo2 extends React.Component {

    render() {
        debugger;
        return (
            <Svg version="1.1" id="Layer_1"  x="0" y="0"
                             width="635" height="700" enable-background="new 0 0 135 39" >
                          <Rect x="50" y="50" height="50" width="200" Transform="matrix(-0.7072 0.707 -0.707 -0.7072 142.588 -17.6385)" fill-rule="evenodd" clip-rule="evenodd" fill="black" />
                          <Rect x="50" y="100" height="50" width="200" Transform="matrix(-0.707 0.7072 -0.7072 -0.707 118.3964 -7.6375)" fill-rule="evenodd" clip-rule="evenodd" fill="red" />
                          <Rect x="50" y="150" height="50" width="200" fill-rule="evenodd" clip-rule="evenodd" fill="#d3d3d3"  fill="blue"/>
                          <Rect x="50" y="200" height="50" width="200" fill-rule="evenodd" clip-rule="evenodd" fill="#d3d3d3"   fill="green"/>
                          <Text x="100" y="250"
                                                fontFamily="sans-serif"
                                                fontSize={0.25*customStyles.logoWidth}
                                                    textAnchor="middle"
                                                fill="url(#earthColors1)"
                                              >πTW</Text>
                          </Svg>

        )
    }
}

Logo2.defaultProps = {
    title: 'ATD',
};

Logo2.propTypes = {
    title: PropTypes.string
};
