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

router.get("/:id", getEnvelopeById)

router.post("/", addEnvelope)

router.put("/:id", updateEnvelope)

module.exports = router