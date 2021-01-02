module.exports = {
  client: {
    service: {
      name: 'twitter-react',
      localSchemaFile: './graphql/schema.json',
    },
    include: ['./src/**/*.ts', './src/**/*.tsx'],
    excludes: ['**/__tests__/**', './node_modules/'],
  },
};
