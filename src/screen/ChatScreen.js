import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ChatListItem from '../components/ChatListItem/ChatListItem';

export default function ChatScreen() {
    const data = require('./assets/data/chats.json');

    return (
        <View style={styles.container}>
            {
                data.map((chat, index) => (
                    <ChatListItem chat={chat} key={index + 1} />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  