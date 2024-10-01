import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://us-west-2.cdn.hygraph.com/content/cm1pegu7s00sr07uy964kijxd/master',
  documents: 'src/graphql/queries.ts',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: [
        {
          add: {
            content: '/* eslint-disable */'
          }
        }
      ]
    }
  }
};

export default config;
