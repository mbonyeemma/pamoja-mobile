import React from 'react';
import {
 View, Text, TextInput, Dimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FormField = ({
  mobile = false,
  styles,
  secureTextEntry,
  textChanged,
  inputValue,
  icon = true,
  leftIconName = 'arrow-drop-down',
  rightIconName = 'arrow-drop-down',
  rightIcon,
  iconSize = 25,
  iconColor = 'rgba(0,0,0,.5)',
  header = '',
  placeholder = '',
  keyboardType = '',
  rightIconClicked,
  canEdit = true,
}) => {
  let textInput;

  if (mobile) {
    textInput = (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          borderBottomWidth: 1,
          alignItems: 'center',
          borderBottomColor: 'rgba(0,0,0,.25)',
        }}
      >
        <View style={{ justifyContent: 'center' }}>
          <Text>+256</Text>
        </View>
        <Icon
          name={leftIconName}
          size={25}
          color={iconColor}
          style={{
            alignSelf: 'center',
            borderRightWidth: 1,
            borderRightColor: 'rgba(0,0,0,.25)',
          }}
        />
        <TextInput
          onChangeText={(e, name) => textChanged(e, name)}
          style={{ flexGrow: 1 }}
          placeholder={placeholder}
          editable={canEdit}
          keyboardType="number-pad"
          value={inputValue}
        />
        {rightIcon ? (
          <Icon
            name={rightIconName}
            size={iconSize}
            color={iconColor}
            style={{ alignSelf: 'center' }}
            onPress={rightIconClicked}
          />
        ) : null}
      </View>
    );
  } else {
    textInput = (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          borderBottomColor: 'rgba(0,0,0,.25)',
          borderBottomWidth: 1,
          alignItems: 'center',
        }}
      >
        <TextInput
          onChangeText={textChanged}
          style={{
            width: rightIcon ? '80%' : '90%',
            flexGrow: 1,
            // height: '50%'
          }}
          placeholder={placeholder}
          editable={canEdit}
          value={inputValue}
          secureTextEntry={secureTextEntry}
        />
        {rightIcon ? (
          <Icon
            name={rightIconName}
            size={iconSize}
            color={iconColor}
            style={{ alignSelf: 'center' }}
            onPress={rightIconClicked}
          />
        ) : null}
      </View>
    );
  }

  return (
    <View style={[{ width: '90%', alignSelf: 'center', marginTop: 5 }, styles]}>
      <Text allowFontScaling style={{ color: 'rgba(0,0,0,.25)' }}>
        {header}
      </Text>
      {textInput}
    </View>
  );
};

export default FormField;