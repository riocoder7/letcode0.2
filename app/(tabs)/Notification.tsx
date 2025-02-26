import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notifications = [
    { id: '1', message: 'Notification 1' },
    { id: '2', message: 'Notification 2' },
    { id: '3', message: 'Notification 3' },
];

const Notification = () => {
    const renderItem = ({ item }: { item: { id: string; message: string } }) => (
        <View style={styles.notificationItem}>
            <Text>{item.message}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Notifications</Text>
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    notificationItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default Notification;