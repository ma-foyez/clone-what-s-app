import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatListItem from './src/components/ChatListItem/ChatListItem';

export default function App() {
  const data = require('./assets/data/chats.json');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {
            data.map((chat, index) => (
              <ChatListItem chat={chat} key={index + 1} />
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
