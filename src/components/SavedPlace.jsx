import {Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import SavedPlaceStyles from './SavedPlaceStyles';
import savedPlaceStyles from './SavedPlaceStyles';
import {phoneLanguage} from '../tools/util';

const SavedPlace = () => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <View style={SavedPlaceStyles.view1.this}>
        <Icon
          name={'star'}
          style={SavedPlaceStyles.view1.icon1}
          size={16}
          color={'black'}
          raised
        />
        <Text style={SavedPlaceStyles.view1.text1}>{t('savedPlace.desc')}</Text>
        <View style={SavedPlaceStyles.view1.view}>
          <Icon
            name={phoneLanguage === 'ar' ? 'chevron-left' : 'chevron-right'}
            style={SavedPlaceStyles.view1.icon2}
            size={25}
          />
        </View>
      </View>
      <View style={savedPlaceStyles.view2} />
    </React.Fragment>
  );
};

export default SavedPlace;
