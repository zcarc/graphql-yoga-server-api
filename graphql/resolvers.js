const hyunsoo = {
    name: 'Hyunsoo',
    age: 18,
    gender: 'female'
}


const resolvers = {
    Query: {
        person: () => hyunsoo,
    }
};

export default resolvers;