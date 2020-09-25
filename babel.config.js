import { module } from 'config/webpack.config.prod';

module.exports = {
  presets: ['babel-preset-react-app'],
  plugins: [['babel-plugin-root-import', { rootPathSuffix: 'src' }]],
};
