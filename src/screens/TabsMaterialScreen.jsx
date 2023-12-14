import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../styles/Theme';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

// stacks
const HomeStack = createStackNavigator();

// home stack screen
const HomeStackScreen = ({navigaton})=>(
    <HomeStack.Navigator screenOptions={{
            headerStyle:{ backgroundColor: Theme.colors.ark,        
        },headerTintColor: Theme.colors.title
        , headerTitleStyle: {
            fontWeight:'normal'
        }}}>
        <HomeStack.Screen name="HomeStackScreen" component={HomeScreen} options={
            { 
                title: 'Café player', tabBarLabel:'Café', 
            }
        }/>
        <TaskDetailsStack.Screen name="DetailsStackScreen" component={DetailsScreen} options={
            { 
            title: 'Detalhes', tabBarLabel:'Detalhes', 
            }
        }/>      
                
        <HomeStack.Screen name="SettingsStackScreen" component={SettingsScreen} options={
            { 
                title: 'Configurações', tabBarLabel:'Configurações', headerLeft: ()=>(
                <Icon.Button name="cog-outline" size={25} color='#333' 
                    style={{backgroundColor:Theme.colors.ark}} />
                )
            }
        }/>          

    </HomeStack.Navigator>    
);


const Tab = createMaterialBottomTabNavigator();

const TabsMaterialScreen = ()=>(
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="HomeTabScreen"
            activeColor={Theme.colors.active}
            barStyle={{ backgroundColor: Theme.colors.cafe }}>
            <Tab.Screen
                name="DetailsTabScreen" component={DetailsScreen} options={{
                tabBarLabel: 'Player', tabBarIcon: ({ color }) => (
                    <Icon name="plus-circle-outline" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen name="HomeTabScreen" component={HomeScreen} options={{ tabBarLabel: 'Início', 
                title:'Teste',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="SettingsTabScreen" component={SettingsScreen} options={{ tabBarLabel: 'Configurações',
                tabBarIcon: ({ color }) => (
                    <Icon name="cog-outline" color={color} size={26} />
                ),
                }}
            />
            
        </Tab.Navigator>
    </NavigationContainer>
    
);

export default TabsMaterialScreen;