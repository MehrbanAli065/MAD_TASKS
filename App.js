
import * as React from 'react';
import { View, Text, Button,FlatList,StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer
    >
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
            backgroundColor:'green',
    
        },
        headerTintColor:'orange',
        headerTitlestyle:{
          fontSize:15,
        }
    
    }}
      initialRouteName="LoginScreen" headerShown="false">
        <Stack.Screen name="LoginScreen" component={LoginScreen} 
        options={{
          title:"User Login",
          headerStyle:{
              backgroundColor:'blue',
      
          },
          headerTintColor:'orange',
          headerTitlestyle:{
            fontSize:15,
          }
      
      }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// code for home screen
const HomeScreen = ({ navigation }) => {
  let users=[
    {
        id:1,name:"Mehrban Ali"
    },
    {
        id:2,name:"Stephen"
    },
    {
        id:3,name:"Damon"
    },
    {
        id:4,name:"Alina"
    }
  ]
  return (
    <View>
   <FlatList 
   data={users}
   renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
   keyExtractor={item=>item.id}
   />
    </View>
  );
};

const LockScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUnlock = () => {
    navigation.navigate('HomeScreen');
  };

  const handleSignup = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    // <ImageBackground source={require("./images.jpg")} style={{height:'100%',width:'100%'}} >   
     <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email" placeholderTextColor={'yellow'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password" placeholderTextColor={'yellow'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Login"
        onPress={handleUnlock}
        color="red" // Customize the login button color
      />
      <Button
        title="Sign Up"
        onPress={handleSignup}
        color="red" 
      />
    </View>
 

  );
};
const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [Email, setEmail] = useState('');

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Username" placeholderTextColor={'black'}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email" placeholderTextColor={'black'}
        value={Email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password" placeholderTextColor={'black'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password" placeholderTextColor={'black'}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="City" placeholderTextColor={'black'}
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Address" placeholderTextColor={'black'}
        multiline
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Signup" onPress={() => navigation.navigate('HomeScreen')} />
      <Button
        title="Go back to Login Screen"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

const styles=StyleSheet.create({
  item:{
      fontSize:30,
      padding:20,
      borderWidth:2,
      borderColor:'blue',
      margin:10,
      color:'blue',
      backgroundColor:"orange"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderWidth:4,
  },
})
export default App;