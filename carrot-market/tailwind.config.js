module.exports = {
    content: [
        './pages/**/*.{html,ts,tsx}',
        './components/**/*.{html,ts,tsx}',
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// 어디에서 tailwind 를 사용할것인지 알려줘야함.
// 예를 들어 pages 폴더에서 사용할것이면 content:[] 에 ./pages/**/*.{}  -> pages 폴더에 모든 폴더에 모든파일이 가능, 확장자명 제한