const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newGame = await models.Game.create(input);
    return newGame
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};