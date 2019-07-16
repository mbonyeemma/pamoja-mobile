import React, { Component } from 'react';
import { Text, FlatList, View, TextInput, ScrollView } from 'react-native';
import ContactListItem from '../../../components/ContactListItem/ContactListItem';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../../constants/theme';

const data = [
  {
    active: true,
    name: 'Andrea Kiiza'
  },
  {
    active: false,
    name: 'Cardi Nuwamanya'
  },
  {
    active: true,
    name: 'Charlie Bogere'
  },
  {
    active: false,
    name: 'Jose Juan'
  }
];

export default class TransferSearchListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      value: ''
    };
    this.dataHolder = data;
  }

  searchList = text => {
    const { data } = this.state;
    const result = this.dataHolder.filter(item => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({ value: text, data: result });
  };
  _renderItem = ({ item }) => {
    const { name, active } = item;
    return (
      <ContactListItem
        name={name}
        active={active}
        pressed={this.props.pressed}
      />
    );
  };
  render() {
    const { data } = this.state;
    return (
      <ScrollView style={{ flex: 1, padding: '5%' }}>
        <View style={{ flex: 0, flexDirection: 'row', paddingBottom: 10 }}>
          <Icon name={`md-arrow-back`} size={20} color={theme.colors.gray} />
          <Text
            allowFontScaling
            style={{
              fontFamily: theme.fonts.regular,
              fontSize: theme.fonts.base,
              paddingLeft: 7,
              color: theme.colors.lightBlack
            }}
          >
            Select Recipient
          </Text>
        </View>
        <View
          style={{
            flex: 0,
            width: '100%',
            borderWidth: 1,
            borderColor: theme.colors.gray,
            borderRadius: 10,
            backgroundColor: theme.colors.darkGray,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: 10
          }}
        >
          <Icon
            style={{ paddingTop: 8 }}
            name={`md-search`}
            size={25}
            color={theme.colors.gray}
          />
          <TextInput
            style={{
              width: '80%',
              fontFamily: theme.fonts.regular,
              fontSize: theme.fonts.base + 2,
              color: theme.colors.lightBlack,
              paddingBottom: 2,
              paddingLeft: 20
            }}
            placeholder={`Search`}
            onChangeText={text => this.searchList(text)}
            value={this.state.value}
          />
        </View>
        <FlatList
          style={{
            flex: 2,
            marginTop: 10
          }}
          data={data}
          renderItem={({ item }) => this._renderItem({ item })}
          keyExtractor={item => item.name}
        />
      </ScrollView>
    );
  }
}
