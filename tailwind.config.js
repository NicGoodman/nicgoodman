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
              hoverBounceUp: {
                '0%': { transform: 'translateY(0)', opacity: '1', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                '50%': { transform: 'translateY(-10%)', opacity: '0.66', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'},
                '100%': { transform: 'translateY(0)', opacity: '1', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' }
              },
              hoverBounceDown: {
                '0%': { transform: 'translateY(0)', opacity: '1', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                '50%': { transform: 'translateY(10%)', opacity: '0.66', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'},
                '100%': { transform: 'translateY(0)', opacity: '1', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' }
              },
              hoverBounceLeft: {
                '0%': { transform: 'translateX(0)', opacity: '1', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                '50%': { transform: 'translateX(-10%)', opacity: '0.66', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'},
                '100%': { transform: 'translateX(0)', opacity: '1', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' }
              },
              hoverBounceRight: {
                '0%': { transform: 'translateX(0)', opacity: '1', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                '50%': { transform: 'translateX(10%)', opacity: '0.66', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'},
                '100%': { transform: 'translateX(0)', opacity: '1', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' }
              },
            },
            animation: {
              hoverBounceUp: 'hoverBounceUp 1s infinite ease-in-out',
              hoverBounceDown: 'hoverBounceDown 1s infinite ease-in-out',
              hoverBounceLeft: 'hoverBounceLeft 1s infinite ease-in-out',
              hoverBounceRight: 'hoverBounceRight 1s infinite ease-in-out',
              initialBounceUp: 'hoverBounceUp 1s 2 ease-in-out',
              initialBounceDown: 'hoverBounceDown 1s 2 ease-in-out',
              initialBounceLeft: 'hoverBounceLeft 1s 2 ease-in-out',
              initialBounceRight: 'hoverBounceRight 1s 2 ease-in-out'
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