/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {openDatabase} from 'react-native-sqlite-storage';

export default function HomeScreen() {
  const db = openDatabase({name: 'ReactNativeDB'});
  const [filePath, setFilePath] = useState({});

  useEffect(() => {
    createTable();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createTable() {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS ImageTable (id INTEGER PRIMARY KEY AUTOINCREMENT,imageuri VARCHAR(500))',
        [],
        (sqltxn, res) => {
          console.log('Table created successfully');
        },
        error => {
          console.log('Error Occured while Creating Table' + error.message);
        },
      );
    });
  }

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

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

  const captureImage = async type => {
    console.log('Capture Image ');
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
      includeBase64: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      //console.log('Capture Image if block');
      launchCamera(options, response => {
        //console.log('Response = ', response);

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
        // console.log('base64 -> ', response.assets[0].base64);
        // console.log('uri -> ', response.assets[0].uri);
        // console.log('width -> ', response.assets[0].width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.assets[0].fileSize);
        // console.log('type -> ', response.assets[0].type);
        // console.log('fileName -> ', response.assets[0].fileName);
        setFilePath(response.assets[0]);
        Addimage();
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      console.log('Response Assets = ', response.assets[0].uri);

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
      setFilePath(response.assets[0]);
      Addimage();
    });
  };

  function Addimage() {
    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO ImageTable (imageuri) VALUES (?)',
        [filePath.uri],
        (sqltxn, res) => {
          console.log('Image added successfully');
          Alert.alert('Image added successfully');
        },
        error => {
          console.log(
            'Error occurded while adding Image to table' + error.message,
          );
        },
      );
    });
  }

  return (
    <View style={{flex: 1}}>
      <Text style={styles.titleText}>Image Picker in React Native</Text>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>Capture Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
