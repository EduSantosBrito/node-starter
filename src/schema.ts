import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';
import { GraphQLSchema } from 'graphql';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import resolvers from './resolvers';

const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, 'schemas/**/*.graphql')));

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
