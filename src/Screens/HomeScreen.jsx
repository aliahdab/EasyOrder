import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {t} from 'i18next';
import SearchBar from '../components/SearchBar';
import SavedPlace from '../components/SavedPlace';
import DestinationOnMap from '../components/DestinationOnMap';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-2 flex-1`}>
        <View style={{flex: 3, backgroundColor: 'red'}}>
          <Text>{t('home.test')}</Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'blue'}}>
          <Text>Ridw Package</Text>
        </View>
        <SearchBar />
        <SavedPlace />
        <DestinationOnMap />
        <View style={{flex: 6, backgroundColor: 'white'}}>
          <Text>Around you</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
