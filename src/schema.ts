import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import path from 'path';
import resolvers from './resolvers';

const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, 'schemas/**/*.graphql')));

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
