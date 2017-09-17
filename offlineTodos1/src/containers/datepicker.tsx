import Calendar from 'react-native-calendar-datepicker'
import Moment from 'moment'
import React, { Component } from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import {styles} from '../styles/common-styles.js'

export default class DatePicker extends Component<any, any> {
  constructor(props){
    super(props);
    this.state = {
        selecting : false,
        SelectedDate: Moment().add(0, 'years').startOf('day')
    }
  }

  onClickDate = () => {
      debugger;
      this.setState({selecting: true})
  }
  render() {
      if(this.state.selecting) {
          const BLUE = '#2196F3';
          const RED = 'red';
          const GREY = '#BDBDBD';
          const BLACK = '#424242';
          const LIGHT_GREY = '#F5F5F5';

          return (
          // <View style={[styles.calendar, {zIndex:100000, flexGrow: 1, flex:1, backgroundColor: "cyan"}]}>

              <Modal
                  animationType="slide"
                  transparent={false}
                  visible={true}
                  onRequestClose={() => this.setState({ selecting: false})}
              >
                  <View style={styles.calContainer}>
                  <Calendar
                      onChange={(date) => this.setState({SelectedDate : date, selecting: false})}
                      selected={this.state.SelectedDate}
                      minDate={Moment().add(-2, 'years').startOf('day')}
                      maxDate={Moment().add(10, 'years').startOf('day')}
                      barText={{
                          fontWeight: 'bold',
                          color: BLUE,
                      }}
                      stageView={{
                          padding: 0,
                      }}
                     dayHeaderView={{
                         backgroundColor: LIGHT_GREY,
                         borderBottomColor: GREY,
                     }}
                     dayHeaderText={{
                         fontWeight: 'bold',
                         color: BLACK,
                     }}
                     dayRowView={{
                         borderColor: LIGHT_GREY,
                         height: 40,
                     }}
                     dayText={{
                         color: BLACK,
                     }}
                     dayDisabledText={{
                         color: GREY,
                     }}
                     dayTodayText={{
                         fontWeight: 'bold',
                         color: BLUE,
                     }}
                     daySelectedText={{
                         fontWeight: 'bold',
                         backgroundColor: BLUE,
                         color: RED,
                         borderRadius: 15,
                         borderColor: "transparent",
                         overflow: 'hidden',
                     }}
                     monthText={{
                         color: BLACK,
                         borderColor: BLACK,
                     }}
                     monthDisabledText={{
                         color: GREY,
                         borderColor: GREY,
                     }}
                     monthSelectedText={{
                         fontWeight: 'bold',
                         backgroundColor: BLUE,
                         color: RED,
                         overflow: 'hidden',
                     }}
                     yearMinTintColor={BLUE}
                     yearMaxTintColor={GREY}
                     yearText={{
                         color: BLACK,
                     }}
                  />
                  </View>
              </Modal>
          // </View>
          )
      }
      else {
          console.log(this.state.SelectedDate.format("MM/DD/YYYY"))
          return (
              <View >
                  <TouchableHighlight onPress={() => this.onClickDate() }>
                      <Text
                          style={{
                              height: 40,
                              borderColor: "gray",
                              borderWidth: 1,
                              marginTop: 8
                          }}
                      >{this.state.SelectedDate.format("MM/DD/YYYY")}</Text>
                  </TouchableHighlight>
              </View>
          )
      }
    }
  }
