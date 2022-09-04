import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {setDestination} from '../../slices/navSlice';
import i18n from 'i18next';
import {API_URL} from '@env';
import WhereToStyles from './WhereToStyles';
import MapView from 'react-native-maps';
import tw from 'twrnc';

const WhereTo = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={tw`flex-1`}
    />
  );
};

export default WhereTo;
