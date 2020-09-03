import Login from "./components/Login";
import Chat from "./components/Chat";
import CreateAccount from "./components/CreateAccount";
// Import React Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// Create the navigator
const AppNavigator = createStackNavigator({
  Login: Login,
  CreateAccount: CreateAccount,
  Chat: Chat,
});
export default createAppContainer(AppNavigator);
