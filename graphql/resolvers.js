import {getMovies, getById, addMovie, deleteMovie} from './db';


// resolvers는 어떤 형태로든 원하는 대로 변화할 수 있다. (example: go to any api or any db)

const resolvers = {
  // person: (_, { id }) === person: (_, args.id)

  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },

  Mutation: {
    addMovie: (_, {name, score}) => addMovie(name, score),
    deleteMovie: (_, {id}) => deleteMovie(id)
  }

};


export default resolvers;