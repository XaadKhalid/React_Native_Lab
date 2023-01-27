/* eslint-disable prettier/prettier */
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const Dashboard = ({navigation}) => {
  const [flrlist, setFlrlist] = useState([]);

  useEffect(() => {
    fetchflowerlist();
  }, []);

  const shift = () => {
    navigation.navigate('Addflower');
  };
  const fetchflowerlist = async () => {
    const response = await fetch(
      'http://192.168.43.90/MyAPI/api/user/getflowers',
    );
    const data = await response.json();
    setFlrlist(data);
  };
  return (
    //<ScrollView>
      <View>
        <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          shift();
        }}>
        <Text style={styles.btntxt}>Add Flowers</Text>
      </TouchableOpacity>
      <Text>List of Flowers</Text>
      <View>
      <FlatList
        data={flrlist}
        renderItem={({item}) => {
          return (
              <View>
                <Text>ID: {item.id}</Text>
                <Text>Name: {item.Fr_Name}</Text>
                <Text>Price: PKR {item.Fr_Price}</Text>
                <Image source={item.Fr_Image} style={styles.img} />
              </View>
          );
        }}
      />
      </View>
    </View>
    //</ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  btn: {
    paddingHorizontal: 75,
    paddingVertical: 15,
    backgroundColor: '#777800',
    marginBottom: 25,
  },
  btntxt: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
