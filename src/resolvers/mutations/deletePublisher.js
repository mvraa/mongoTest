const { ApolloError } = require("apollo-server");

module.exports = async (_, {id}, {models}) => {
  
  const deletePub = await models.Publishers.deleteOne({_id: id})

  if(deletePub.deletedCount) return{id: id}

  else throw new ApolloError(`Failed to delete address.`);

};