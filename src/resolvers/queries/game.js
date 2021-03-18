module.exports = async (_, {}, {models}) => {
    return await models.Game.find();
  };