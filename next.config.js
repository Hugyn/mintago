// module.exports = {
//   reactStrictMode: true,
  
// }
module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  },
}