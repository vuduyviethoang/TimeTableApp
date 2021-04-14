import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';
import { NavigationContainer } from '@react-navigation/native';

const EditProfileScreen = ({navigation}) => {

  const [image, setImage] = useState('data:image/png;base64,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');
  const {colors} = useTheme();

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Chọn ảnh đại diện của bạn</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Chụp ngay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Chọn từ thư viện</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Hủy</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, marginBottom:10 ,fontWeight: 'bold'}}>
            Vũ Duy Việt Hoàng
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={25} />
          <TextInput
            placeholder="Họ và tên"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="transgender" color={colors.text} size={25} />
          <TextInput
            placeholder="Giới tính"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={25} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="calendar" color={colors.text} size={25} />
          <TextInput
            placeholder="Sinh nhật"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={25} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="globe" color={colors.text} size={25} />
          <TextInput
            placeholder="Địa chỉ"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="school-outline" color={colors.text} size={25} />
          <TextInput
            placeholder="Trường học"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('ProfileScreen') }>
          <Text style={styles.panelButtonTitle}>Lưu</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});