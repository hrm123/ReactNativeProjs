import { View, TextInput, Text,  Modal, Button} from 'react-native';
import React  from 'react';
import {styles} from '../styles/common-styles';
import uuid from 'react-native-uuid';

export interface PasswordProps  {
    onPasswordSet: (string) => void
}

export interface PasswordState  {
    selected : boolean,
    SelectedPassword: string,
    passwordError: string,
    EmailId: string
}


class passwordUI extends React.Component<PasswordProps, PasswordState> {

  constructor(props){
    super(props);
    this.state = {
        selected : false,
        SelectedPassword: "",
        passwordError: "",
        EmailId: ""
    }
  }

    onClickSubmit = () => {
        if(this.state.SelectedPassword && this.state.SelectedPassword.trim().length >0) {
            this.setState({passwordError: "", selected: true})
            this.props.onPasswordSet(this.state.SelectedPassword)
        }
        else{
            this.setState({passwordError: "Invalid password", selected: false})
        }
    }

  render() {
      let passwordError =  <Text style={{color: "red"}}>{this.state.passwordError}</Text>
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={true}
            onRequestClose={() => this.props.onPasswordSet(uuid.v4())}
        >
            <View style={styles.container}>
                <View style={styles.formGroup}>
                    <View style={styles.formGroupRow}>
                        <View style={styles.formRowLabel}>
                            <Text>Enter a password (will needed each time you open the app):</Text>
                        </View>
                        <View style={styles.formRowControl}>
                            <TextInput
                            value={this.state.SelectedPassword}
                            style={styles.input}
                            placeholder='Enter a password'
                            selectionColor='#666666'
                            onChangeText={ (text) => this.setState({SelectedPassword : text})}
                            />{passwordError}
                        </View>
                    </View>
                    <View style={styles.formGroupRow}>
                        <View style={styles.formRowLabel}>
                            <Text>Enter an Email ID (to send the selected password to):</Text>
                        </View>
                        <View style={styles.formRowControl}>
                            <TextInput
                                value={this.state.EmailId}
                                style={styles.input}
                                placeholder='Enter email id'
                                selectionColor='#666666'
                                onChangeText={ (text) => this.setState({EmailId : text})}
                            />
                        </View>
                    </View>
                    <View style={styles.formGroupRow}>
                        <Button
                            onPress={this.onClickSubmit}
                            title="Submit"
                        />
                    </View>
                </View>
            </View>
        </Modal>
        )
    }
  }


export default passwordUI;