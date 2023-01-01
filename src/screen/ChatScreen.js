import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import bg from "./../../assets/images/BG.png";
import Message from '../components/ChatListItem/Message';
import chat from "./../../assets/data/messages.json"

export default function ChatScreen() {
    return (
        <ImageBackground source={bg} style={styles.chatBG}>
            <FlatList
                data={chat}
                renderItem={({ item }) => <Message data={item} />}
                style={styles.list}
                keyExtractor={(item) => item.id}
                // inverted
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    chatBG: {
        flex: 1,
    },
    list: {
        padding: 10
    }
})