import {StyleSheet} from 'react-native';
import tw from 'twrnc';

const SearchBarStyles = {
  view: {
    this: tw`flex-1 flex-row flex-grow bg-gray-200 rounded-full m-1 mt-2 justify-between`,
    icon1: tw`flex-grow m-2.5`,
    text1: tw`text-base flex-grow m-2.5 ml-1 font-semibold  `,
    icon2: tw`flex-grow m-2 `,
    text2: tw`text-sm mt-1.5 font-semibold text-slate-800`,
    view: tw`flex-row bg-gray-100 rounded-full m-1.5`,
    view1: tw`flex-row`,
    antiDesign: tw`m-2`,
  },
};

export const s = StyleSheet.create;

export default SearchBarStyles;
