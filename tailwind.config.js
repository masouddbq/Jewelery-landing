export default {
    content : [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme : {
        extend : {
            colors : {
                'base-green' : '#A4B465', //Nav or other backgrounds
                'main-green' : '#626F47', //Texts or titles
                'button-bg' : '#F0BB78', //back of buttons or cards
                'button-text' : '#F5ECD5' //text of buttons or anything
            }
        }
    },
    plugins : []
}