const {  DataTypes } = require('sequelize');

const db = require('../../db');

module.exports = () => {

    const Deck = db.sequelize.define('Deck', {
        cards: {
          type: DataTypes.ARRAY(DataTypes.JSON),
          allowNull: false
        },
        userId: {
          type: DataTypes.STRING
        }
        
      });
      
      return Deck
}