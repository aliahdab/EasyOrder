import {Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchBarStyles from './SearchStyles';

const SearchBar = () => {
  const {t} = useTranslation();
  return (
    <View style={SearchBarStyles.view.this}>
      <View style={SearchBarStyles.view.view1}>
        <Icon
          name={'search'}
          style={SearchBarStyles.view.icon1}
          size={28}
          color={'black'}
        />
        <Text style={SearchBarStyles.view.text1}>{t('search.whereTo')}</Text>
      </View>
      <View style={SearchBarStyles.view.view}>
        <AntDesign
          name={'clockcircle'}
          style={SearchBarStyles.view.antiDesign}
          size={16}
          color={'black'}
        />
        <Text style={SearchBarStyles.view.text2}>{t('search.now')}</Text>
        <Icon
          name={'keyboard-arrow-down'}
          style={SearchBarStyles.view.icon2}
          size={14}
        />
      </View>
    </View>
  );
};

export default SearchBar;
