import { createAppContainer, createStackNavigator } from 'react-navigation';
import SignInNavigator from './SignIn';
import SplashScreen from './SplashScreen';
import GuideScreens from './GuideScreens';
import BottomMenuScreen from '../components/BottomMenu/BottomMenu';
import EditAccountScreen from './EditAccount';
import CreateAccount from './CreateAccount';
import Verification from './PhoneVerification';
import AccountDetails from '../screens/AccountDetails/JointAccount';
// import Swipe from "./xx";

const navigator = createStackNavigator(
  {
    // Swipe,
    Splash: SplashScreen,
    Verification,
    SignIn: SignInNavigator,
    Guide: GuideScreens,
    AccountDetails,
    EditAccount: EditAccountScreen,
    // AccountDetails,
    CreateAccount,
    // AccountDetails,
    BottomMenu: BottomMenuScreen,
  },
  {
    defaultNavigationOptions: {
      // screen: '',
      header: null,
    },
    // initialRouteName: 'Splash'
  },
);

export default createAppContainer(navigator);
