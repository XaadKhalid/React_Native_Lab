/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  ToastAndroid,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import Data from './Data';

const Home = ({route, navigation}) => {
  const params = route.params;
  const isFocused = useIsFocused();
  const [items, setItems] = useState(Data);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log('Home useEffect');
    if (isFocused) {
      if (params) {
        setCartItems(params.cartItems);
      }
    }
  }, [isFocused]);

  // SYNC with Cart Route
  const handleAddToCart = item => {
    setCartItems(prev => [...prev, item]);
    alert('Added to cart');
  };

  const handleViewCart = () => {
    navigation.navigate('Cart', {cartItems});
  };

  const showItem = ({item}) => {
    console.log(item);
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Image source={item.image} style={{height: 70, width: 70}} />
        <Button onPress={() => handleAddToCart(item)} title="Add to cart" />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* <Button mode="contained" onPress={handleViewCart}>
                View Cart
            </Button> */}
      <Button title="View Cart" onPress={handleViewCart} />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-around'}}
        numColumns={2}
        data={items}
        keyExtractor={(item, index) => index}
        renderItem={showItem}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  cardContainer: {
    padding: 10,
    marginVertical: 10,
  },
  cardContent: {
    marginBottom: 10,
  },
  cardActions: {
    marginTop: 10,
  },
});
