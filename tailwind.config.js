module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height: {
        '192': '48rem'
      },
      fontSize: {
        'xs': '.75rem'
      }
    },
    fontFamily: {
      'sans': ['graphie', 'sans-serif'],
      'mono': ['dico-mono', 'mono'],
      'script': ['dico-mono-script', 'mono']
    }
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
      padding: ['hover', 'focus'],
      fontSize: ['hover', 'focus']
    }
  },
  plugins: [],
}
