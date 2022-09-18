
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';


export default function ScreenB({ navigation, route }) {
     const {ItemName, ItemId} = route.params;
    const onPressHandler = () => {
      navigation.goBack();
       //navigation.setParams({ItemId: 20});
    }
  
    return (
      <View style={styles.body}>
        <Text style={styles.text}>
          Screen B
        </Text>
        <Pressable
          onPress={onPressHandler}
          style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
        >
          <Text style={styles.text}>
            Go Back to Screen A
          </Text>
        </Pressable>

        <Text style={styles.text}>
            {ItemName}
          </Text>
          <Text style={styles.text}>
           id : {ItemId}
          </Text>

      </View>
    )
  }
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    }
  })
  

