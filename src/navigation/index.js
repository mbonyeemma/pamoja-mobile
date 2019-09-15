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
    Guide: GuideScreens,
    SignIn: SignInNavigator,
    Splash: SplashScreen,
    AccountDetails,
    EditAccount: EditAccountScreen,
    // AccountDetails,
    CreateAccount,
    Verification,
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
