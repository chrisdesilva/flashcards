import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VocabWord = (props) => (
    <View style={styles.vocabWord}>
        <Text>{props.vocabWord}</Text>
    </View>
);

const styles = StyleSheet.create({
    vocabWord: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee"
    }
});

export default VocabWord;