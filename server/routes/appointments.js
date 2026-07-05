import express from 'express'
import jwt from 'jsonwebtoken'
import Appointment from '../models/Appointment.js'

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret'

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header required' })
  }
  const token = authHeader.replace('Bearer ', '')
  try {
    req.user = jwt.verify(token, JWT_SECRET)
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Get appointments for the authenticated patient
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: patientId
 *         schema:
 *           type: string
 *         description: Optional patient ID to fetch appointments for
 *     responses:
 *       200:
 *         description: Appointments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Appointment'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { patientId } = req.query
    const query = { patientId: patientId || req.user.id }
    const appointments = await Appointment.find(query)
    return res.json(appointments)
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch appointments' })
  }
})

/**
 * @swagger
 * /api/appointments:
 *   post:
 *     summary: Create a new appointment
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [date, time, department]
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *               time:
 *                 type: string
 *               department:
 *                 type: string
 *               comments:
 *                 type: string
 *     responses:
 *       201:
 *         description: Appointment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { date, time, department, comments } = req.body
    if (!date || !time || !department) {
      return res.status(400).json({ message: 'Date, time and department are required' })
    }
    const appointment = await Appointment.create({
      patientId: req.user.id,
      date,
      time,
      department,
      comments,
    })
    return res.status(201).json(appointment)
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create appointment' })
  }
})

export default router
