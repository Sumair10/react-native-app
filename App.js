/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  Button,
  Alert,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const backgroundStyle = {
  backgroundColor: 'purple',
};
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Items',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Forth Items',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fifth Items',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Sixth Items',
  },
  
];

const Separator = () => <View style={styles.separator} />;

const Item = ({item, onPress, backgroundColor,}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  <Text style={[styles.title]}>{item.title}</Text>
</TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null)
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? "purple" : "black";
    return(
      <Item 
      item={item}
      onPress={() => setSelectedId(item.id)}
      backgroundColor={{ backgroundColor }}
      />
      
      )
    }
  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={backgroundStyle.backgroundColor} a />

        <View
          style={{
            backgroundColor: 'purple',
            height: 50,
          }}></View>
      </SafeAreaView>
      {/* <ScrollView> */}

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        // horizontal ={true}
        refreshing = {true}
     
        />
      {/* <Separator /> */}
      <View
        style={{
          // display:'flex',
          // flexDirection : 'row',
          alignItems: 'center',
          
          // width: '50%'
        }}>
        <Button
          onPress={() => Alert.alert('Simple Button pressed')}
          title="Learn More"
          color="black"
          accessibilityLabel="Learn more about this purple button"
          />
      </View>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="purple" />
      </View>
          {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btn: {
    width: 10,
    backgroundColor: 'black',
  },
  item: {
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius:10
  },
  title: {
    color: 'white',
  },
});

export default App;
