import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

const modal = ({
  showing,
  close,
  fullWidth = true,
  styles,
  component,
  showCloseButton,
  backdropOpacity = 0.9,
  ...rest
}) => {
  let newStyles = {};
  if (fullWidth) {
    newStyles = {
      ...styles,
      marginLeft: -18,
      marginRight: -18,
      marginBottom: -18,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    };
  }

  return (
    <View>
      <Modal
        isVisible={showing}
        onBackButtonPress={close}
        onBackdropPress={close}
        backdropOpacity={backdropOpacity}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          {fullWidth ? (
            <View
              style={{
                justifyContent: 'space-between',
                width: '100%',
                borderColor: 'black',
                paddingRight: '1%',
                flexDirection: 'row'
              }}
            >
              <Text style={{ color: 'white', fontSize: 18 }}>
                {rest.title || ''}
              </Text>
              {showCloseButton && (
                <Icon name="md-close" color="white" size={20} onPress={close} />
              )}
            </View>
          ) : null}
          <View
            style={[
              {
                height: '20%',
                borderColor: 'green',
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
              },
              newStyles, styles
            ]}
          >
            {component}
          </View>
        </View>
      </Modal>
    </View>
  );
};

// For Complete list of all props for this props check link below.
// https://www.github.com/react-native-community/react-native-modal

export default modal;
