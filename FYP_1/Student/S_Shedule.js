/* eslint-disable prettier/prettier */
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function S_Shedule() {
  const [mon, setMon] = useState(false);
  return (
    <View style={styles.main_container}>
      <View style={styles.row}>
        <View style={styles.time_header}>
          <Text style={styles.header_txt}>Time Slots</Text>
          <View style={{marginTop: 5}}>
            <Text style={styles.header_txt}>08:30-09:30 AM</Text>
          </View>
          <View style={{marginTop: 6}}>
            <Text style={styles.header_txt}>09:30-10:30 AM</Text>
          </View>
          <View style={{marginTop: 8}}>
            <Text style={styles.header_txt}>10:30-11:30 AM</Text>
          </View>
          <View style={{marginTop: 9}}>
            <Text style={styles.header_txt}>11:30-12:30 PM</Text>
          </View>
          <View style={{marginTop: 9}}>
            <Text style={styles.header_txt}>12:30-01:30 PM</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.header_txt}>01:30-02:30 PM</Text>
          </View>
          <View style={{marginTop: 9}}>
            <Text style={styles.header_txt}>02:30-03:30 PM</Text>
          </View>
          <View style={{marginTop: 9}}>
            <Text style={styles.header_txt}>03:30-04:30 PM</Text>
          </View>
        </View>
        <View style={styles.days_header}>
          <Text style={styles.header_txt}>Mon</Text>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
        </View>
        <View style={styles.days_header}>
          <Text style={styles.header_txt}>Tue</Text>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
        </View>
        <View style={styles.days_header}>
          <Text style={styles.header_txt}>Wed</Text>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={value => setMon({value})} />
          </View>
        </View>
        <View style={styles.days_header}>
          <Text style={styles.header_txt}>Thu</Text>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
        </View>
        <View style={styles.days_header}>
          <Text style={styles.header_txt}>Fri</Text>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
        </View>
        <View style={styles.days_header}>
          <Text style={styles.header_txt}>Sat</Text>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
          <View>
            <CheckBox value={mon} onValueChange={() => setMon(true)} />
          </View>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <View>
          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.btntxt}>Update Shedule</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    padding: 10,
    backgroundColor: '#497174', //f5f2ef ,, b3cf cf cb 
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 10,
    backgroundColor: '#EFF5F5',
  },
  time_header: {
    flex: 3,
  },
  header_txt: {
    color: '#000000'
  },
  days_header: {
    flex: 1,
  },
  btn: {
    paddingHorizontal: 45,
    paddingVertical: 15,
    backgroundColor: '#EB6440',
    borderRadius: 10,
    marginTop: 25,
    elevation: 10,
  },
  btntxt: {
    color: '#FFFBF5',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
