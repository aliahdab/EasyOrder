import {NativeModules, Platform} from 'react-native';

export let deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

export const phoneLanguage = deviceLanguage.substring(0, 2);
