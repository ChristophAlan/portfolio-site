import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  useColorSchemeMediaQuery: true,  
  colors: {
    ...novelaTheme.colors,
    accent: `#0F73BA`,
    background: `#CED3E0`,
    modes: {
      dark: {
        grey: "#73737D",
        primary: "#fff",
        secondary: "#fff",
        accent: "#32aafd",
        background: "#111114",
        hover: "rgba(255, 255, 255, 0.07)",
        gradient:
          "linear-gradient(180deg, #111114 0%, rgba(48, 50, 64, 0.32) 100%)",
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