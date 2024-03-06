const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Climbers = sequelize.define('climbers',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull:false},
})

const Mountains = sequelize.define('mountains',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.INTEGER, allowNull:false},
    height:{type: DataTypes.INTEGER, allowNull:false}
})

const Climbings = sequelize.define('climbings',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}
})

Climbers.belongsToMany(Mountains, {through: Climbings})
Mountains.belongsToMany(Climbers, {through: Climbings})

module.exports = {
    Climbers,
    Mountains,
    Climbings
}