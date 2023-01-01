import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Message({ data }) {

    const isMyMessage = () => {
        return data.user.id === "u1";
    }

    return (
        <View style={[styles.container, {
            backgroundColor: isMyMessage() ? "#DCF8C5" : 'white',
            alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        }]}>
            <Text>{data.text}</Text>
            <Text style={styles.time}>{dayjs(data.createdAt).fromNow(true)}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
    },
    time: {
        color: 'gray',
        alignSelf: 'flex-end'
    }
})