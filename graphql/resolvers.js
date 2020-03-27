import {getMovies} from './db';


// resolvers는 어떤 형태로든 원하는 대로 변화할 수 있다. (example: go to any api or any db)
// 첫번째 파라미터의 '_'는 parent도 될 수 있고 root도 될 수 있는데 안쓰니까 저렇게 표현한다.

const resolvers = {
  // person: (_, { id }) === person: (_, args.id)

  Query: {
    movies: (_, {limit, rating}) => getMovies(limit, rating),
  },

};


export default resolvers;