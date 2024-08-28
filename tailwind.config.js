/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainbg: "url('/public/images/herosticky.21d438492c38ebc166a5 (1).png')",
        clodbg: "url('/public/images/cloudbg.f472ba8b321849222728.png')",
        cabbg: "url('/public/images/Mesa.e62cf3c4a82c763c9ffd.png')",
        aboutbg: "url('/public/images/clopud3.172f13d6ca8922b428f8.png')",
        whobg: "url('/public/images/Group.064f5db5fa9cc0289f9e.png')",
        who2bg: "url('/public/images/who2.a8aaf0be51f0db098145.png')",
      },
      screens: {
        xxxl: { max: '1900px' },
        xxl: { max: '1500px' },
        xl: { max: '1300px' },
        lg: { max: '1024px' },
        md: { max: '768px' },
        sm: { max: '640px' },
        xs: { max: '500px' },
        xxs: { max: '400px' },
        xxxs: { max: '376px' },
      },
    },
  },
  plugins: [],
};
