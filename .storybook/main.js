module.exports = {
  stories: ['../src/stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-notes/register'],
  webpackFinal: async (config) => {
    ;(config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('babel-preset-react-app')],
            },
          },
          require.resolve('react-docgen-typescript-loader'),
        ],
      },
    ]),
      config.resolve.extensions.push('.ts', '.tsx')
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
