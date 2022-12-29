import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ChatListItem() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" }} />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name}>M.A Fayez</Text>
          <Text style={styles.subTitle}>8:30</Text>
        </View>
        <Text style={styles.subTitle} numberOfLines={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum odit sit maxime sequi accusantium nisi adipisci voluptate sunt expedita. Quos ex quasi dignissimos esse porro perferendis non eius delectus consequuntur.</Text>
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
  row:{
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