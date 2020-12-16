module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            height: {
                "192": "48rem",
                "144": "36rem",
                "160": "40rem"
            },
            width: {
                "18": "4.5rem"
            },
            fontSize: {
                xs: ".75rem"
            },
            outline: {
                yellow: '2px solid #FBBF24'
            },
            keyframes: {
              hoverBounce: {
                '0%': { transform: 'translateY(0)', opacity: '1', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                '50%': { transform: 'translateY(-10%)', opacity: '0.66', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'},
                '100%': { transform: 'translateY(0)', opacity: '1', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' }

              }
            },
            animation: {
              hoverBounce: 'hoverBounce 1s infinite ease-in-out'
            }
        },
        fontFamily: {
            sans: ["graphie", "sans-serif"],
            mono: ["dico-mono", "mono"],
            script: ["dico-mono-script", "mono"]
        }
    },
    variants: {
        extend: {
            fontFamily: ["hover", "focus"],
            fontWeight: ['hover', 'focus'],
            padding: ["hover", "focus"],
            fontSize: ["hover", "focus"],
            animation: ["hover", "focus"]
        }
    },
    plugins: []
};