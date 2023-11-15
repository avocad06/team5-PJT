/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      presetColors: [
        {color: "rgba(127, 190, 38, 1)", title: "green-90"},
        {color: "rgba(127, 190, 38, .8)", title: "green-80"},
        {color: "rgba(127, 190, 38, .5)", title: "green-50"},
        {color: "rgba(127, 190, 38, .3)", title: "green-30"},
        {color: "rgba(127, 190, 38, .1)", title: "green-10"},

        {color: "rgba(93, 42, 12, 1)", title: "dark-brown-90"},
        {color: "rgba(93, 42, 12, .8)", title: "dark-brown-80"},
        {color: "rgba(93, 42, 12, .5)", title: "dark-brown-50"},
        {color: "rgba(93, 42, 12, .3)", title: "dark-brown-30"},
        {color: "rgba(93, 42, 12, .1)", title: "dark-brown-10"},

        {color: "rgba(108, 90, 68, .9)", title: "brown-90"},
        {color: "rgba(108, 90, 68, .8)", title: "brown-80"},
        {color: "rgba(108, 90, 68, .5)", title: "brown-50"},
        {color: "rgba(108, 90, 68, .3)", title: "brown-30"},
        {color: "rgba(108, 90, 68, .1)", title: "brown-10"},

        {color: "rgba(232, 227, 219, 1)", title: "beige-90"},
        {color: "rgba(232, 227, 219, .8)", title: "beige-80"},
        {color: "rgba(232, 227, 219, .5)", title: "beige-50"},
        {color: "rgba(232, 227, 219, .3)", title: "beige-30"},
        {color: "rgba(232, 227, 219, .1)", title: "beige-10"},
        
        {color: "rgba(124, 159, 212, 1)", title: "light-blue-90"},
        {color: "rgba(124, 159, 212, .8)", title: "light-blue-80"},
        {color: "rgba(124, 159, 212, .5)", title: "light-blue-50"},
        {color: "rgba(124, 159, 212, .3)", title: "light-blue-30"},
        {color: "rgba(124, 159, 212, .1)", title: "light-blue-10"},

        {color: "rgba(172, 206, 4, 1)", title: "light-green-90"},
        {color: "rgba(172, 206, 4, .8)", title: "light-green-80"},
        {color: "rgba(172, 206, 4, .5)", title: "light-green-50"},
        {color: "rgba(172, 206, 4, .3)", title: "light-green-30"},
        {color: "rgba(172, 206, 4, .1)", title: "light-green-10"},

        {color: "rgba(167, 168, 165, 1)", title: "medium-gray-90"},
        {color: "rgba(167, 168, 165, .8)", title: "medium-gray-80"},
        {color: "rgba(167, 168, 165, .5)", title: "medium-gray-50"},
        {color: "rgba(167, 168, 165, 212, .3)", title: "medium-gray-30"},
        {color: "rgba(167, 168, 165, 212, .1)", title: "medium-gray-10"},
      ],
    },
  },
};

export default preview;
