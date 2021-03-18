module.exports = async (_, {genre}, {models}) => {
    return await models.Game.find({genre: genre});
};
  