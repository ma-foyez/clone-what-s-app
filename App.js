import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatScreen from './src/screen/ChatScreen';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ChatScreen />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

