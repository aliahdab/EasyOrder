import {Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import {s} from './SearchStyles';
import DestinationOnMapStyles from './DestinationOnMapStyles';

const DestinationOnMap = () => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <View style={s(DestinationOnMapStyles.view1.this)}>
        <Icon
          name={'location-pin'}
          style={s(DestinationOnMapStyles.view1.icon1)}
          size={16}
          color={'black'}
          raised
        />
        <Text style={s(DestinationOnMapStyles.view1.text1)}>
          {t('destinationOnMap.desc')}
        </Text>
        <View style={s(DestinationOnMapStyles.view1.view)}>
          <Icon
            name={'chevron-right'}
            style={s(DestinationOnMapStyles.view1.icon2)}
            size={25}
          />
        </View>
      </View>
      <View style={s(DestinationOnMapStyles.view2)} />
    </React.Fragment>
  );
};

export default DestinationOnMap;
