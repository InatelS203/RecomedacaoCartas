class DBAdapter {
    static async findAllEntityWithType(Entity, type) {
        const entities = await Entity.findAll({ where: { type } });
        if(entities.length == 0)
            return {error: true, message: `Nenhuma carta encontrada para o tipo ${type}`}
        return entities;
    }
  
  }
  
  module.exports = DBAdapter;