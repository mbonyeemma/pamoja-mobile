import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import ActionTopHeader from '../../components/ActionHeader/ActionTopHeader';
import ActionBottomHeader from '../../components/ActionHeader/ActionBottomHeader';
import Modal from '../../components/Modal/Modal';

import DisplayJointAccount from './DisplayJointAccount';
import DisplayCustomAccount from './DisplayCustomAccount';
import SuccessModal from './successModal.js';

import theme from '../../constants/theme';
import styles from './CreateAccountStyles';
import config from './config';

const { data, adminRulesData, customAccountData } = config;

class CreateAccount extends Component {
  state = {
    mode: 2,
    showModal: false
  };

  topHeader = (
    <ActionTopHeader complete={() => this.setState({ showModal: true })} />
  );

  bottomHeader = <ActionBottomHeader bottomText="Create New Account" />;

  showScreen = id => this.setState({ mode: id });

  renderModal = () => (
    <SuccessModal close={() => this.setState({ showModal: false })} />
  );

  render() {
    const { mode, showModal } = this.state;
    let title;
    if (mode === 1) {
      title = 'Custom Account';
    } else if (mode === 2) {
      title = 'Joint Account';
    } else if (mode === 3) {
      title = 'Fixed Account';
    } else if (mode === 4) {
      title = 'Limbo Account';
    } else if (mode === 5) {
      title = 'Current Account';
    }

    return (
      <View style={styles.container}>
        <View style={{ height: '15%' }}>
          <Modal
            fullWidth={false}
            styles={{ height: '15%', borderWidth: 0 }}
            component={this.renderModal()}
            showing={showModal}
            backdropOpacity={0}
            close={() => this.setState({ showModal: false })}
          />
          <Header
            style={{
              borderWidth: 0
            }}
            topHeader={this.topHeader}
            bottomHeader={this.bottomHeader}
          />
        </View>

        <View style={styles.navigationButtonContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.navigationButtonScroll}
          >
            {data.map(({ id, name }) => {
              const btnStyles =
                mode === id
                  ? styles.activeButtonStyles
                  : { backgroundColor: theme.colors.darkGray };
              const textStyles =
                mode === id
                  ? { color: theme.colors.blue }
                  : { color: theme.colors.gray };
              return (
                <View key={id} style={[styles.navigationButton, btnStyles]}>
                  <TouchableOpacity onPress={() => this.showScreen(id)}>
                    <Text style={[styles.buttonTextStyles, textStyles]}>
                      {name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
        {mode === 2 ? (
          <View style={[styles.titleContainer, { padding: 8 }]}>
            <Icon name="md-contacts" size={15} color={theme.colors.white} />
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>{`${title}:`}</Text>
              <Text style={styles.groupText}>{`for group savings`}</Text>
            </View>
          </View>
        ) : null}

        <View style={styles.inputContainer}>
          <Icon name="md-person" size={35} color={theme.colors.gray} />
          <View style={styles.textInputContainer}>
            <Text style={styles.accountNameText}>Account Name</Text>
            <TextInput style={styles.accountNameTextInput} />
          </View>
        </View>
        {mode === 2 ? (
          <DisplayJointAccount
            title={title}
            label="Account Members"
            data={adminRulesData}
          />
        ) : null}
        {mode === 1 ? <DisplayCustomAccount data={customAccountData} /> : null}
      </View>
    );
  }
}
export default CreateAccount;
