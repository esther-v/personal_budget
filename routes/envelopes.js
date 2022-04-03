const express = require('express')
const router = express.Router()

const {
    getEnvelopes,
    addEnvelope,
    getEnvelopeById,
    updateEnvelope,
    deleteEnvelope,
    transfer
} = require ('../controllers/envelopesController')

router.get("/", getEnvelopes)

router.get("/:id", getEnvelopeById)

router.post("/", addEnvelope)

router.put("/:id", updateEnvelope)

router.delete("/:id", deleteEnvelope)

router.post("/transfer/:fromId/:toId", transfer)

module.exports = router