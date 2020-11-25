'use strict'

const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`
    }
  }
})

Student.beforeSave(student => {
  const firstName = student.firstName
  const lastName = student.lastName
  const first = firstName[0].toUpperCase() + firstName.slice(1)
  const last = lastName[0].toUpperCase() + lastName.slice(1)
  student.firstName = first
  student.lastName = last
})

Student.prototype.initials = function()  {
  const firstInitial = this.firstName[0]
  const lastInitial = this.lastName[0]
  return `${firstInitial} ${lastInitial}`
}

module.exports = Student;
