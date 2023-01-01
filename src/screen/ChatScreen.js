import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ChatListItem from '../components/ChatListItem/ChatListItem';
import data from "./../../assets/data/chats.json"

export default function ChatScreen() {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <ChatListItem chat={item} />}
        />
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
