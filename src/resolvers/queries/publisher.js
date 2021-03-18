module.exports = async (_, {}, {models}) => {
    return await models.Publishers.find();
};