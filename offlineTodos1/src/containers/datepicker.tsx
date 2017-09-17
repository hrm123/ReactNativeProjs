import Calendar from 'react-native-calendar-datepicker'
import Moment from 'moment'
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

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
          return (
          <View>
              <Calendar
                  onChange={(date) => this.setState({SelectedDate : date, selecting: false})}
                  selected={this.state.SelectedDate}
                  minDate={Moment().add(-2, 'years').startOf('day')}
                  maxDate={Moment().add(10, 'years').startOf('day')}
              />
          </View>
          )
      }
      else {
          console.log(this.state.SelectedDate.format("MM/DD/YYYY"))
          return (
              <View>
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
