import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface ButtonProps {
  title: string;
}

function Button(props:ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <Button title="confirm"  />
      <Button title="erase" />
      <Button title="blank" />
      <StatusBar style="auto"  backgroundColor='red'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'red',
    fontSize: 20,
  },
  button:{
    backgroundColor: 'red',
    borderBottomColor: 'green'

  }
});
