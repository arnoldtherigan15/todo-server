'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Todo = sequelize.define('Todo', {
    class Todo extends sequelize.Sequelize.Model {
      static associate(models) {

      }
    }
    Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: DataTypes.DATE
  }, {
    sequelize,
    "modelName": "Todo"
  });
  // Todo.associate = function(models) {
  //   // associations can be defined here
  // };
  return Todo;
};