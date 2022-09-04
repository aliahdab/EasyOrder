import {Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import DestinationOnMapStyles from './DestinationOnMapStyles';
import {phoneLanguage} from '../tools/util';

const DestinationOnMap = () => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <View style={DestinationOnMapStyles.view1.this}>
        <Icon
          name={'location-pin'}
          style={DestinationOnMapStyles.view1.icon1}
          size={16}
          color={'black'}
          raised
        />
        <Text style={DestinationOnMapStyles.view1.text1}>
          {t('destinationOnMap.desc')}
        </Text>
        <View style={DestinationOnMapStyles.view1.view}>
          <Icon
            name={phoneLanguage === 'ar' ? 'chevron-left' : 'chevron-right'}
            style={DestinationOnMapStyles.view1.icon2}
            size={25}
          />
        </View>
      </View>
      <View style={DestinationOnMapStyles.view2} />
    </React.Fragment>
  );
};

export default DestinationOnMap;
