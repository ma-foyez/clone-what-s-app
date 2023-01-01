import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatScreen from './src/screen/ChatScreen';
import ChatsScreen from './src/screen/ChatsScreen';

export default function App() {
  return (
    <ScrollView >
      {/* <View style={{ paddingVertical: 15 }}>
        <ChatsScreen />
      </View> */}
      <View>
        <ChatScreen />
      </View>
    </ScrollView>
  );
}
