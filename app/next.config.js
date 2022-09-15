module.exports = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://saadbess.github.io'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.jsx/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    })

    return config
  },
}
