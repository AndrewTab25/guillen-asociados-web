/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          bg: '#f1f6f6',          // Base suave menta/océano pastel
          card: '#fafcfc',        // Fondo de tarjeta sutilmente quebrado
          mint: '#e6f4ed',        // Verde pastel suave inspirado en el barco del logo
          mintBorder: '#c3e6d3',  // Borde verde pastel
          ocean: '#e7f0f5',       // Azul pastel suave inspirado en las olas del logo
          oceanBorder: '#c2dbe8', // Borde azul pastel
          sand: '#f7f6f2',        // Arena pastel cálido
          slate: '#e8edf0',       // Gris suave pastel
        },
        brand: {
          navy: {
            DEFAULT: '#0a2336',   // Azul marino profundo para texto y contraste
            dark: '#061624',
            light: '#143c5a',
          },
          emerald: {
            DEFAULT: '#009f63',   // Verde esmeralda del logo
            light: '#05c27a',
            dark: '#007a4c',
          },
          ocean: {
            DEFAULT: '#0f4c64',   // Azul océano del logo
            light: '#1f6f91',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'triptico-left': 'inset -15px 0 25px -10px rgba(0, 0, 0, 0.08), 0 10px 30px rgba(11, 40, 61, 0.1)',
        'triptico-center': 'inset 15px 0 20px -10px rgba(0, 0, 0, 0.05), inset -15px 0 20px -10px rgba(0, 0, 0, 0.05), 0 10px 30px rgba(11, 40, 61, 0.1)',
        'triptico-right': 'inset 15px 0 25px -10px rgba(0, 0, 0, 0.08), 0 10px 30px rgba(11, 40, 61, 0.1)',
      }
    },
  },
  plugins: [],
}
