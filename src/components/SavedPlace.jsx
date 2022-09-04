import {Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import SavedPlaceStyles from './SavedPlaceStyles';
import {s} from './SearchStyles';
import savedPlaceStyles from './SavedPlaceStyles';

const SavedPlace = () => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <View style={s(SavedPlaceStyles.view1.this)}>
        <Icon
          name={'star'}
          style={s(SavedPlaceStyles.view1.icon1)}
          size={16}
          color={'black'}
          raised
        />
        <Text style={s(SavedPlaceStyles.view1.text1)}>
          {t('savedPlace.desc')}
        </Text>
        <View style={s(SavedPlaceStyles.view1.view)}>
          <Icon
            name={'chevron-right'}
            style={s(SavedPlaceStyles.view1.icon2)}
            size={25}
          />
        </View>
      </View>
      <View style={s(savedPlaceStyles.view2)} />
    </React.Fragment>
  );
};

export default SavedPlace;
