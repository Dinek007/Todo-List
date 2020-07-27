import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const colors = {
    blue: '#FFE4C4',
    grey: "#444444"
}

export const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: colors.blue
        },
        secondary: {
            main: colors.grey
        },
    }
}))
