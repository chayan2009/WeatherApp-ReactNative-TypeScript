import { Colorss } from './Colorss';

export const themedStyles = (isDarkMode: boolean) => ({
    container: {
      backgroundColor: isDarkMode ? Colorss.dark : Colorss.white,
    },
    textColor: {
      color: isDarkMode ? Colorss.white : Colorss.black,
    },
    toolbarBg: {
      backgroundColor: isDarkMode ? Colorss.dark : Colorss.primary,
    },
    toolbarText: {
      color: Colorss.white,
    },
    inputBorder: {
      borderBottomColor: isDarkMode ? Colorss.secondary : Colorss.black,
    },
    placeholderText: isDarkMode ? Colorss.secondary : Colorss.dark,
    errorText: {
      color: isDarkMode ? Colorss.danger : Colorss.warning,
    },
  });