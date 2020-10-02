import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  useColorSchemeMediaQuery: true,  
  colors: {
    ...novelaTheme.colors,
    accent: `#0F73BA`,
    background: `#EBECF0`,
    gradient: "linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #CACDD5 100%)",
    modes: {
      dark: {
        grey: "#73737D",
        primary: "#f5f5f5",
        secondary: "#fff",
        accent: "#32aafd",
        background: "#1c1c1c",
        hover: "rgba(255, 255, 255, 0.07)",
        gradient:
          "linear-gradient(180deg, #1c1c1c 0%, rgba(17, 18, 22, 100) 100%)",
        articleText: "#fff",
        track: "rgba(255, 255, 255, 0.3)",
        progress: "#fff",
        card: "#1D2128",
        error: "#EE565B",
        success: "#46B17B",
        errorBackground: "rgba(238, 86, 91, 0.1)",
        horizontalRule: "rgba(255, 255, 255, 0.15)",
        inputBackground: "rgba(255, 255, 255, 0.07)",
      },
    },
  },
};