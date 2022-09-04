import tw from 'twrnc';

const SearchBarStyles = {
  view: {
    this: tw`flex-1 flex-row flex-grow bg-gray-200 rounded-full m-1 mt-2 justify-between`,
    icon1: tw`flex-grow m-2.5`,
    text1: tw`text-lg flex-grow mt-2.5 ml-1 font-serif font-bold  `,
    icon2: tw`flex-grow m-2 `,
    text2: tw`text-sm mt-1.5 font-medium text-slate-800 font-serif`,
    view: tw`flex-row bg-gray-100 rounded-full m-1.5`,
    view1: tw`flex-row`,
    antiDesign: tw`m-2`,
  },
};

export default SearchBarStyles;
