/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pfstardust: ['"PF스타더스트"'], // 폰트 이름 추가
      },
    },
  },
  plugins: [],
};
