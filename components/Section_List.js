/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';

const data = [
  {
    title: 'Main Dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
},
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
},
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
},
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
},
];

// const Item = ({item}) => {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{item}</Text>
//     </View>
//   );
// };

// const Header = ({title}) => {
//   return <Text style={styles.header}>{title}</Text>;
// };

const Section_List = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        //keyExtractor={(item, index) => item + index}
        renderItem={ ({item}) => {
            return (
                <View style={styles.item}>
                  <Text style={styles.title}>{item}</Text>
            </View>
            );
        }}
        renderSectionHeader={({section}) => {
            return <Text style={styles.header}>{section.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 20, marginHorizontal: 16},
  item: {
    backgroundColor: '#FF5858',
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
  },
  header: {fontSize: 32},
  title: {fontSize: 24, color: 'white', textAlign: 'center'},
});

export default Section_List;
