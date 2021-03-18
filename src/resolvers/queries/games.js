module.exports = async (_, {}, {models}) => {
    return await models.Games.find();
  };