import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main'

export default function App() {
  return (
    <View style={style.container}>
      <Title text="ONEBITHEALTH"/>
      <Main/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10, 
  },
})
