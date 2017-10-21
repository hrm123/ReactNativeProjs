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
            <Svg version="1.1" id="Layer_1"  x="0px" y="0px"
                             width="135" height="39" viewBox="0 0 135 39" enable-background="new 0 0 135 39" >
                          <Rect x="71.411" y="17.171" Transform="matrix(-0.7072 0.707 -0.707 -0.7072 142.588 -17.6385)" fill-rule="evenodd" clip-rule="evenodd" fill="#FDC28E" width="7.07" height="7.07"/>
                          <Rect x="57.244" y="17.172" Transform="matrix(-0.707 0.7072 -0.7072 -0.707 118.3964 -7.6375)" fill-rule="evenodd" clip-rule="evenodd" fill="#FDC28E" width="7.072" height="7.07"/>
                          <Rect x="83.946" y="19.874" fill-rule="evenodd" clip-rule="evenodd" fill="#d3d3d3" width="40.833" height="1.667"/>
                          <Rect x="9.946" y="19.874" fill-rule="evenodd" clip-rule="evenodd" fill="#d3d3d3" width="40.833" height="1.667"/>
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
