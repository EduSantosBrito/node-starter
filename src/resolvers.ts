import { IResolvers } from '@graphql-tools/utils';

const resolvers: IResolvers = {
    Query: {
        helloWorld: () => 'Hello world from Apollo Server',
    },
};

export default resolvers;
