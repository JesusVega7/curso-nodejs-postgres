const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct; 
  }

  async find() {
    const rta = await models.Product.findAll({
      include: ['category']
    });
    return rta;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category ;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta =  await category.update(changes);
    return rta;
  }

  async delete(id) {
    const category = await this.findOne(id);
    const rta =  await category.destroy();
    return rta ;
  }
}

module.exports = ProductService;
