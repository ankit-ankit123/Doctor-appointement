import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    date: { type: String, required: true },
    time: { type: String, required: true },
    department: { type: String, required: true, trim: true },
    comments: { type: String, trim: true },
  },
  { timestamps: true }
)

export default mongoose.model('Appointment', appointmentSchema)
