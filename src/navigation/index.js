import { createAppContainer, createStackNavigator } from 'react-navigation';
import SignInNavigator from './SignIn';
import SplashScreen from './SplashScreen';
import GuideScreens from './GuideScreens';
import BottomMenuScreen from '../components/BottomMenu/BottomMenu';
import EditAccountScreen from './EditAccount';
import CreateAccount from './CreateAccount';
import Verification from './PhoneVerification';
import AccountDetails from '../screens/AccountDetails/JointAccount';


import Profile from '../screens/ProfileScreen/ProfileScreen'

const navigator = createStackNavigator(
  {
    Profile,
    BottomMenu: BottomMenuScreen,
    Splash: SplashScreen,
    Guide: GuideScreens,
    AccountDetails,
    SignIn: SignInNavigator,
    EditAccount: EditAccountScreen,
    AccountDetails,
    CreateAccount,
    Verification,
    AccountDetails
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

