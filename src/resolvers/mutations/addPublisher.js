const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newPublisher = await models.Publishers.create(input);
    return newPublisher
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
