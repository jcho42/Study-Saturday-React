'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Student = require('./students')

const Test = db.define('test', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Test.passing = function() {
    const tests = Test.findAll({
      where: {
        grade: {
          [Sequelize.Op.gt]: 70
        }
      }
    })
    return tests
}

Test.findBySubject = function(subjectName) {
    const subjects = Test.findAll({
      where: {
        subject: subjectName
      }
    })
    return subjects
}

Test.belongsTo(Student, {as: 'student'})
Student.hasMany(Test)

module.exports = Test;
