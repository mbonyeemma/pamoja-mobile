import { createAppContainer, createStackNavigator } from 'react-navigation';
import SignInNavigator from './SignIn';
import SplashScreen from './SplashScreen';
import GuideScreens from './GuideScreens';
import BottomMenuScreen from '../components/BottomMenu/BottomMenu';
import EditAccountScreen from './EditAccount';
import CreateAccount from './CreateAccount';
import Verification from './PhoneVerification';
import AccountDetails from './AccountDetails';
import LimboAccount from './LimboAccount';
import CurrentAccount from './CurrentAccount';

const navigator = createStackNavigator(
  {
    BottomMenu: BottomMenuScreen,
    Splash: SplashScreen,
    Guide: GuideScreens,
    AccountDetails,
    SignIn: SignInNavigator,
    EditAccount: EditAccountScreen,
    CreateAccount,
    Verification,
    LimboAccount,
    CurrentAccount
  },
  {
    defaultNavigationOptions: {
      // screen: '',
      header: null
    }
    // initialRouteName: 'Splash'
  }
);

export default createAppContainer(navigator);
