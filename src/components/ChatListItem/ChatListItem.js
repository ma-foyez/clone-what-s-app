import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import moment from 'moment';

export default function ChatListItem({ chat }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: chat.user.image }} />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name}>{chat.user.name}</Text>
          <Text style={styles.subTitle}>{chat.lastMessage.createdAt}</Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>{chat.lastMessage.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#f1f1f1'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5
  },
  name: {
    flex: 1,
    fontWeight: 'bold'
  },
  subTitle: {
    color: 'gray'
  }
})