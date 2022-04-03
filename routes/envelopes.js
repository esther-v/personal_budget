const express = require('express')
const router = express.Router()

const {
    getEnvelopes,
    addEnvelope,
    getEnvelopeById,
    updateEnvelope,
    deleteEnvelope
} = require ('../controllers/envelopesController')

router.get("/", getEnvelopes)

module.exports = router