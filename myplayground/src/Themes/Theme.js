import { createTheme } from '@material-ui/core/styles';

const myTheme = createTheme({
    spacing: (factor) => `${0.25 * factor}rem`, 
    palette:{
        sunrise:{
            bg_green:"#e4dc9c",
            bg_orange:"#f8cc79",
            hightlight_orange: "#eca76a",
            hightlight_green: "#d4c471",
            hightlight_yellow: "#fad46c",
        },
        daytime:{
            bg_white:"#f2e9de",
            hightlight_blue: "#647ca3",
            hightlight_black: "#1c0c09",
            hightlight_gray: "#a5a4ae",
        },
        sunset:{
            bg_purple:"#D26059",
            bg_orange:"#FBC86D",
            hightlight_orange: "#FB9E32",
            hightlight_black: "#3A151C",
            hightlight_purple: "#81414B",
            hightlight_gray: "#a5a4ae",
        },
        night:{
            bg_black:"#1F1D36",
            bg_purple:"#3F3351",
            hightlight_purple:"#864879",
            hightlight_pink:"#E9A6A6",
        },
    },
    
});

export default myTheme;