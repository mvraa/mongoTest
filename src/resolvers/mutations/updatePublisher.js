const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const publisherToUpdate = await models.Publisher.findOne({_id: id});

    if(!publisherToUpdate) throw new ApolloError(`Could not find publisher with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      publisherToUpdate[value] = input[value];
    });

    const updatedPublisher = await publisherToUpdate.save();

    return updatedPublisher
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  