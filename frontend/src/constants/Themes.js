const themes = {
  light: {
    primaryButtonsColor:
      'linear-gradient(to right, #1fa2ff 0%,#12d8fa 51%,#1fa2ff 100%)',
    'Button-shadow':
      'inset -4px -4px 8px rgba(0, 0, 0, 0.2),inset 1px 1px 2px #000000',
    'Button-shadow-hover':
      'inset -1px -1px 2px #000000,inset 4px 4px 8px rgba(0, 0, 0, 0.2)',
    'small-Button-shadowHover':
      'inset -4px -4px 8px rgba(255, 255, 255, 1),inset 2px 2px 4px rgba(0, 0, 0, 0.2)',
    'small-Button-shadow':
      'inset -1px -1px 2px rgba(0, 0, 0, 0.2),inset 4px 4px 8px rgba(255, 255, 255, 1)',
    radius: '20px',
    bodyBackground: '#ecf0f3',
    headerBackGroundColor: 'rgba(0, 0, 0, 0.3)',
    cardsShadow: '10px 10px 20px #cbced1, -15px -15px 30px #fff',
    cardsShadowHover: '10px 10px 20px #fff, -15px -15px 30px #cbced1',
    bodyTextColor: 'rgb(0, 0, 0)',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    linksColor: 'rgba(0, 0, 0, 0.7)',
  },
  dark: {
    primaryButtonsColor:
      'linear-gradient(to right, #1fa2ff 0%,#12d8fa 51%,#1fa2ff 100%)',
    'Button-shadow': 'none',
    'Button-shadow-hover': 'none',
    'small-Button-shadowHover':
      'inset -4px -4px 8px #090909,inset 2px 2px 4px #252525',
    'small-Button-shadow':
      'inset -1px -1px 2px #090909, inset 4px 4px 8px #252525',
    radius: '20px',
    bodyBackground: '#171717',
    headerBackGroundColor: 'rgba(0, 0, 0, 0.3)',
    cardsShadow: '10px 10px 20px #090909, -10px -10px 20px #252525',
    cardsShadowHover: '10px 10px 20px #252525, -10px -10px 20px #090909',
    bodyTextColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    linksColor: 'rgba(255, 255, 255, 0.7)',
  },
};

////SOURCE M.Jonathan Wilkie.
let currentTheme = 'light';

const changeTheme = (theme) => {
  currentTheme = theme;

  let rootStyle = document.documentElement.style;
  for (let variable in themes[theme]) {
    if (themes[theme].hasOwnProperty(variable)) {
      rootStyle.setProperty('--' + variable, themes[theme][variable]);
    }
  }
};

export { currentTheme, changeTheme };
