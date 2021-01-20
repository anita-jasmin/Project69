
import React,{Component} from 'react';
import ScanScreen from './screens/ScanScreen'
import{createAppContainer} from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends Component{
  render(){
    return(
      
        <AppContainer/>
      
    )
  }
}
const BottomTabNavigator=createBottomTabNavigator({
  ScanScreen:ScanScreen
})
const AppContainer=createAppContainer(BottomTabNavigator);
