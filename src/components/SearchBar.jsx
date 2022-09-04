import {Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import SearchBarStyles, {s} from './SearchStyles';
import {Icon} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  const {t} = useTranslation();
  return (
    <View style={s(SearchBarStyles.view.this)}>
      <View style={s(SearchBarStyles.view.view1)}>
        <Icon
          name={'search'}
          style={s(SearchBarStyles.view.icon1)}
          size={28}
          color={'black'}
        />
        <Text style={s(SearchBarStyles.view.text1)}>{t('search.whereTo')}</Text>
      </View>
      <View style={s(SearchBarStyles.view.view)}>
        <AntDesign
          name={'clockcircle'}
          style={s(SearchBarStyles.view.antiDesign)}
          size={16}
          color={'black'}
        />
        <Text style={s(SearchBarStyles.view.text2)}>{t('search.now')}</Text>
        <Icon
          name={'keyboard-arrow-down'}
          style={s(SearchBarStyles.view.icon2)}
          size={18}
        />
      </View>
    </View>
  );
};

export default SearchBar;
