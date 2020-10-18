import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TouchableWithoutFeedbackBase} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export class Home extends Component {
  state = {
    data: [],
    input: '',
  };
  addData = () => {
    const itemBaru = this.state.input;
    this.state.data.push(itemBaru);
    this.setState({
      data: this.state.data,
      input: '',
    });
  };
  hapus = (kata) => {
    const item = kata;
    const dataFilter = this.state.data.filter((value, key) => {
      return item != key;
    });
    this.setState({data: dataFilter});
  };
  render() {
    return (
      <View style={styles.Box}>
        <View style={styles.header}>
          <Text style={styles.Tittel}> To Do List </Text>
        </View>

        <ScrollView style={{flex:1}}>
          {this.state.data.map((value, key) => {
            return (
              <View style={{width:'100%',height:50,flexDirection:'row',backgroundColor:'white',margin:3,elevation:3,height:50,elevation:5}} key={key}>
                <View style={{width:'3%',backgroundColor:'blue'}}></View>
                <View style={{width:'82%',backgroundColor:'white',padding:5,borderRadius:5,margin:5}}>
                  <Text>{value}</Text>
                </View>
                <View style={{width:"10%",backgroundColor:'#ba5508',justifyContent:'center',alignItems:'center'}}>
                  <Icon
                    name="trash-2"
                    size={30}
                    onPress={() => this.hapus(key)}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={{width:'100%',height:50,flexDirection:'row',elevation:5,backgroundColor:'white',justifyContent:'center'}}>
          <View style={{width:'85%',margin:5,borderRadius:5,borderWidth:1}}>
            <TextInput
              style={{width:'75%'}}
              placeholder="MASUKAN"
              value={this.state.input}
              onChangeText={(text) => this.setState({input: text})}
            />
          </View>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Icon name="plus-square" color="green" size={35} onPress={() => this.addData()} />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Tittel: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
