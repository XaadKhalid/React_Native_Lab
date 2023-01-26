import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function S_Shedule() {
  const [mon, setMon] = useState(false);
  return (
    <View style={styles.main_container}>
      <View style={styles.row}>
        <View style={styles.time_header}>
          <Text>Time</Text>
          <View style={{marginTop: 5}}>
            <Text>08:30-09:30 AM</Text>
          </View>
          <View style={{marginTop: 6}}>
            <Text>09:30-10:30 AM</Text>
          </View>
          <View style={{marginTop: 8}}>
            <Text>10:30-11:30 AM</Text>
          </View>
          <View style={{marginTop: 9}}>
            <Text>11:30-12:30 PM</Text>
          </View>
          <View style={{marginTop: 9}}>
            <Text>12:30-01:30 PM</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text>01:30-02:30 PM</Text>
          </View>
          <View style={{marginTop: 9}}>
            <Text>02:30-03:30 PM</Text>
          </View>
          <View style={{marginTop: 9}}>
            <Text>03:30-04:30 PM</Text>
          </View>
        </View>
        <View style={styles.days_header}>
          <Text>Mon</Text>
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
          <Text>Tue</Text>
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
          <Text>Wed</Text>
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
          <Text>Thu</Text>
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
          <Text>Fri</Text>
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
          <Text>Sat</Text>
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
    backgroundColor: '#497174',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 10,
    backgroundColor: '#EFF5F5',
  },
  time_header: {
    flex: 2,
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
