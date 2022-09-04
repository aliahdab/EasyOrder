import tw from 'twrnc';

const WhereToStyles = {
  safeAreaView: tw`bg-white h-full`,
  view: tw`flex-col`,
  textInput: tw``,
  googleAuto: {
    container: {
      flex: 0,
    },
    description: {
      fontSize: 18,
    },
    predefinedPlacesDescription: {
      color: 'blue',
    },
    textInput: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
};

export default WhereToStyles;
