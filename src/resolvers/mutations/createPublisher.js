const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newPub = await models.Publisher.create(input);
    return newPub
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
