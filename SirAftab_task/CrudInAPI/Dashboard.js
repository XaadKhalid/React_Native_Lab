/* eslint-disable prettier/prettier */
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const Dashboard = () => {
  const [flrlist, setFlrlist] = useState([]);

  useEffect(() => {
    fetchflowerlist();
  }, []);

  const fetchflowerlist = async () => {
    const response = await fetch(
      'http://192.168.43.90/MyAPI/api/user/getflowers'
    );
    const data = await response.json();
    console.log("DATA", data);
    setFlrlist(data);
  };
  return (
    <View style={styles.Container}>
      <Text>Dashboard</Text>
      <FlatList
        data={flrlist}
        renderItem={({item}) => {
          return (
            <ScrollView>
              <View>
                <Text>{item.id}</Text>
                <Text>{item.Fr_Name}</Text>
                <Text>{item.Fr_Price}</Text>
                <Image source={item.Fr_Image} style={styles.img} />
              </View>
            </ScrollView>
          );
        }}
      />
    </View>
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
    width: 50,
    height: 50,
  },
});
