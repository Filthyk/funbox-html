// PostCss plugins
module.exports = {
    plugins: {
        'postcss-easy-import': {},
        'autoprefixer': {
            browsers: ['defaults', 'not ie < 11'],
        },
        'postcss-mixins': {},
        'postcss-nested': {},
        'postcss-custom-properties': {},
        'postcss-custom-media': {},
        'postcss-nesting': {},
        'postcss-input-style': {},
        'postcss-extend': {},
        'postcss-object-fit-images': {},
        'postcss-gradient-transparency-fix': {},
        'postcss-color-function': {},
        'postcss-pxtorem': {
            selectorBlackList: ['html']
        }
    }
};