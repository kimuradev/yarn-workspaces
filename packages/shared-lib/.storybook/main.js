module.exports = {
  stories: ['../src/**/*.stories.[tj]sx', '../src/**/*.stories.[tj]s'],
  webpack: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['@babel/env', '@babel/react', '@babel/typescript'],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
