const express = require('express')
const router = express.Router()
const Student = require('../db/models/students')

// GET /student
router.get('/', async (req, res, next) => {
  try {
    const allStudents = await Student.findAll({include: {all: true}})
    res.json(allStudents)
  } catch (error) {
    next(error)
  }
})

// GET /student/:id
router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id)
    if (!student) {
      return res.sendStatus(404)
    }
    res.json(student)
  } catch (error) {
    next(error)
  }
})

// POST /student
router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body)
    res.json(newStudent)
  } catch (error) {
    next(error)
  }
})

// PUT /student/:id
router.put('/:id', async (req, res, next) => {
  try {
    const student = await findByPk(req.params.id)
    const updated = await student.update(req.body)
    res.json(updated)
  } catch (error) {
    next(error)
  }
})

// DELETE /student/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await Student.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
