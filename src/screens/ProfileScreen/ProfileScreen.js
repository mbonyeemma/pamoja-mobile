import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/Header';
import Photo from './female.png';
import SingleSetting from './SingleSetting';
import Settings from './fixtures';

export default class ProfileScreen extends Component {
  bottomHeader = (
    <View style={{ flex: 1, justifyContent: 'center', marginLeft: '5%' }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'rgba(255,255,255,.5)'
        }}
      >
        Profile
      </Text>
    </View>
  );

  render() {
    const {
      name = 'Joan Esther Kirabo',
      dob = '25 Mar 1990',
      phone = '+25673232345'
    } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(240, 240, 240, .4)',
          alignItems: 'center'
        }}
      >
        <StatusBar backgroundColor="blue" />
        <Header bottomHeader={this.bottomHeader} style={{ height: '20%' }} />
        <View style={{ flexDirection: 'row', width: '90%' }}>
          <View
            style={{
              // borderWidth: 1,
              width: '33.33%',
              borderWidth: 2,
              borderRadius: 15,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              top: '-2%'
            }}
          >
            <Image
              source={Photo}
              style={{ width: 100, height: 100 }}
              resizeMode="cover"
            />
            <View style={{ position: 'absolute', bottom: '20%', right: '30%' }}>
              <Icon
                name="local-see"
                size={20}
                color="white"
                style={{
                  backgroundColor: 'blue',
                  padding: 5,
                  borderRadius: 50,
                  position: 'absolute'
                }}
                onPress={() => alert('coming soon')}
              />
            </View>
          </View>
          <View
            style={{
              width: '60%',
              justifyContent: 'center',
              paddingLeft: '3%'
            }}
          >
            <Text allowFontScaling style={{ fontSize: 16, fontWeight: 'bold' }}>
              {name}
            </Text>
            <Text
              allowFontScaling
              style={{ fontSize: 11, color: 'rgba(35,31,32,.54)' }}
            >
              {phone}
            </Text>
            <Text
              allowFontScaling
              style={{ fontSize: 11, color: 'rgba(35,31,32,.54)' }}
            >
{`BORN: ${dob}`}

            </Text>
          </View>
          <View
            style={{
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon
              name="edit"
              size={25}
              color="rgb(167, 165, 166)"
              onPress={() => alert('editing profile')}
            />
          </View>
        </View>

        <View
          style={{
            paddingLeft: '5%',
            marginTop: '4%',
            // borderWidth: 1,
            width: '100%'
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'rgba(35, 31, 32, 0.54)'
            }}
          >
            Settings
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flexGrow: 1
            // marginTop: "3%"
          }}
        >
          <ScrollView style={{ flex: 1, width: '100%' }}>
            {Settings.map((el, indx) => (
              <TouchableOpacity
                onPress={() => alert(el.title)}
                key={Math.random()}
              >
                <SingleSetting
                  title={el.title}
                  leftIcon={el.leftIcon ? el.leftIcon : null}
                  styles={{
                    marginBottom: indx === Settings.length - 1 ? 10 : 0
                  }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
