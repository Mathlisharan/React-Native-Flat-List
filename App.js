import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, StatusBar, Alert} from 'react-native';

export default class App extends React.Component {
  
  randerItem = ()=> {
    return(
    <View style={{height:2,width:'100%',backgroundColor:'black'}}></View>
    );
  }
  onPressItem = (item) => {
    Alert.alert(item.name)
  }
  
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.list}>Flat-List:-</Text>
        <FlatList
          data = {
            [
              {name: 'React-Native'}, 
              {name: 'Javascript'},
              {name: 'React-Native'}, 
              {name: 'React-Native'},
              {name: 'Javascript'}, 
              {name: 'React-Native'},
              {name: 'React-Native'},
              {name: 'Javascript'},
              {name: 'React-Native'}, 
              {name: 'Javascript'},
              {name: 'React-Native'}, 
              {name: 'React-Native'},
              {name: 'Javascript'}, 
              {name: 'React-Native'},
              {name: 'React-Native'},
              {name: 'Javascript'},
              {name: 'React-Native'},
              {name: 'Javascript'},
              {name: 'React-Native'}, 
              {name: 'React-Native'},
              {name: 'Javascript'}, 
              {name: 'React-Native'},
              {name: 'React-Native'},
              {name: 'Javascript'},
              {name: 'React-Native'},
              {name: 'Javascript'},
              {name: 'React-Native'}, 
              {name: 'React-Native'},
              {name: 'Javascript'},
              {name: 'React-Native'},
              {name: 'React-Native'},
              {name: 'Javascript'},
              {name: 'React-Native'}, 
              {name: 'Javascript'},
              {name: 'React-Native'}, 
              {name: 'React-Native'},
              {name: 'Javascript'},
              {name: 'React-Native'},
              {name: 'React-Native'},
              {name: 'Javascript'},
              {name: 'React-Native'},
              {name: 'React-Native'}
            ]
          }
        renderItem={
            ({ item }) =>
              <Text  style={styles.item} onPress= {this.onPressItem.bind(this,item)}>{item.name}</Text>
          }
          ItemSeparatorComponent={this.randerItem}
          />
          </View>
          );
        }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgreen',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    fontSize:18,
    height:50,
    color:'dodgerblue',
    textAlign:'center',
    fontWeight:'bold',
  },
  list: {
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    fontStyle:'italic',
    textDecorationLine:'underline'
  },
});
