/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			Green: '#e8bc53',
  			Black: '#000',
  			DeepNightBlack: '#121212',
  			MidNightBlack: '#181818',
  			EveningBlack: '#1a1a1a',
  			DarkGray: '#282828',
  			SlateGray: '#404040',
  			LightGray: '#959595',
  			SilverGray: '#B3B3B3',
  			Snow: '#ffffff'
  		},
  		fontFamily: {
  			'cascadia-normal': [
  				'cascadia-normal'
  			],
  			circular: [
  				'circular-normal',
  				'sans-serif'
  			],
  			'circular-light': [
  				'circular-light',
  				'sans-serif'
  			],
  			'circular-normal': [
  				'circular-normal',
  				'sans-serif'
  			],
  			'circular-medium': [
  				'circular-medium',
  				'sans-serif'
  			],
  			'circular-bold': [
  				'circular-bold',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  keyframes: {
			"accordion-down": {
			  from: { height: "0" },
			  to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			  from: { height: "var(--radix-accordion-content-height)" },
			  to: { height: "0" },
			},
			spotlight: {
			  "0%": {
				opacity: "0",
				transform: "translate(-72%, -62%) scale(0.5)",
			  },
			  "100%": {
				opacity: "1",
				transform: "translate(-50%,-40%) scale(1)",
			  },
			},
			shimmer: {
			  from: {
				backgroundPosition: "0 0",
			  },
			  to: {
				backgroundPosition: "-200% 0",
			  },
			},
			moveHorizontal: {
			  "0%": {
				transform: "translateX(-50%) translateY(-10%)",
			  },
			  "50%": {
				transform: "translateX(50%) translateY(10%)",
			  },
			  "100%": {
				transform: "translateX(-50%) translateY(-10%)",
			  },
			},
			moveInCircle: {
			  "0%": {
				transform: "rotate(0deg)",
			  },
			  "50%": {
				transform: "rotate(180deg)",
			  },
			  "100%": {
				transform: "rotate(360deg)",
			  },
			},
			moveVertical: {
			  "0%": {
				transform: "translateY(-50%)",
			  },
			  "50%": {
				transform: "translateY(50%)",
			  },
			  "100%": {
				transform: "translateY(-50%)",
			  },
			},
			scroll: {
			  to: {
				transform: "translate(calc(-50% - 0.5rem))",
			  },
			},
		  },
		  animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			spotlight: "spotlight 2s ease .75s 1 forwards",
			shimmer: "shimmer 2s linear infinite",
			first: "moveVertical 30s ease infinite",
			second: "moveInCircle 20s reverse infinite",
			third: "moveInCircle 40s linear infinite",
			fourth: "moveHorizontal 40s ease infinite",
			fifth: "moveInCircle 20s ease infinite",
			scroll:
			  "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		  },
  	}
  },
    plugins: [require("tailwindcss-animate")]
}