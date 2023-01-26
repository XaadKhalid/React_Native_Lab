/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

export default function Addflower({navigation}) {
  const [fname, setFname] = useState('');
  const [fprice, setFprice] = useState('');
  const [imagedata, setImagedata] = useState('');

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        Alert.alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const chooseFile = async type => {
    let options = {
      mediaType: type,
      maxWidth: 250,
      maxHeight: 250,
      quality: 1,
      includeBase64: false,
    };
    let isStoragePermitted = await requestExternalWritePermission();
    if (isStoragePermitted) {
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          Alert.alert('User cancelled camera picker');
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          Alert.alert('Camera not available on device');
          return;
        } else if (response.errorCode === 'permission') {
          Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode === 'others') {
          Alert.alert(response.errorMessage);
          return;
        }
        setImagedata(response.assets[0]);
      });
    }
  };

    // console.log('Name: ', imagedata.fileName);
  // console.log('URI: ', imagedata.uri);
  // console.log('Type: ', imagedata.type);

  const image2 =  new FormData();
  image2.append({
    uri: imagedata.uri,
    fileName: imagedata.fileName,
    type: imagedata.type,
  });

  const data = new FormData();
  // data.append({
  //   'Fr_Name': fname,
  //   'Fr_Price': fprice,
  //   'Fr_Image': image2,
  // });
  data.append('Fr_Name', fname);
  data.append('Fr_Price', fprice);
  data.append('Fr_Image',image2);
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  };
  const savedata = async () => {
        const response = await fetch(
      'http://192.168.43.90/MyAPI/api/user/insertdata',
      options,
    );
    console.log('\nmessage form server ', response);
    const result = await response.json();
    console.log('Response From API: ' ,result);
    Alert.alert(result);
  };
  return (
    <View style={styles.Container}>
      <TextInput
        placeholder="Name"
        style={styles.TxtIP}
        onChangeText={value => {
          setFname(value);
        }}
      />
      <TextInput
        placeholder="Price"
        style={styles.TxtIP}
        onChangeText={value => {
          setFprice(value);
        }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          chooseFile('photo');
        }}>
        <Text style={styles.btntxt}>Choose_Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn2}
        onPress={() => {
          console.log('\nImage data: ', image2);
          console.log('\nobject to be send in post body', data);
          savedata();
        }}>
        <Text style={styles.btntxt}>Save Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TxtIP: {
    borderRadius: 5,
    borderColor: '#000000',
    borderWidth: 2,
    width: '80%',
    textAlign: 'center',
    marginBottom: 10,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#450569',
  },
  btn2: {
    paddingHorizontal: 120,
    paddingVertical: 20,
    backgroundColor: '#997739',
    marginTop: 50,
  },
  btntxt: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
