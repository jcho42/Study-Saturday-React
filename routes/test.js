const router = require('express').Router()
const Test = require('../db/models/tests')
const Student = require('../db/models/students')

// GET /test
router.get('/', async (req, res, next) => {
  try {
    const tests = await Test.findAll()
    res.json(tests)
  } catch (error) {
    next(error)
  }
})

// GET /test/:id
router.get('/:id', async (req, res, next) => {
  try {
    const test = await Test.findByPk(req.params.id)
    if (!test) {
      return res.sendStatus(404)
    }
    res.json(test)
  } catch (error) {
    next(error)
  }
})

// GET /test/passing
router.get('/passing', async (req, res, next) => {
  try {
    const passing = await Test.passing()
    res.json(passing)
  } catch (error) {
    next(error)
  }
})

// GET /test/subject/:id
router.get('/subject/:id', async (req, res, next) => {
  try {
    const test = await Test.findByPk(req.params.id)
    const tests = await Test.findBySubject(test.subject)
    res.json(tests)
  } catch (error) {
    next(error)
  }
})

// POST /test/student/:studentId
router.post('/student/:studentId', async (req, res, next) => {
  try {
    const test = await Test.create(req.body)
    const student = await Student.findByPk(req.params.studentId)
    const studentTest =  await test.setStudent(student)
    res.json(studentTest)
  } catch (error) {
    next(error)
  }
})

// DELETE /test/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await Test.destroy({
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
