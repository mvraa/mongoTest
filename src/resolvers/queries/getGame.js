module.exports = async (_, {name}, {models}) => {
    return await models.Game.findOne({name: name});
};
  