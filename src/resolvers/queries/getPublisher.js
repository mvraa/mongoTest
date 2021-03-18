module.exports = async (_, {name}, {models}) => {
    return await models.Publisher.findOne({name: name});
};
  