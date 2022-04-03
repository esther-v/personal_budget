const { resourceLimits } = require("worker_threads")
const db = require("../config/db")
const router = require("../routes/envelopes")
const { createId, findById, deleteById } = require('../helpers/db-helpers')

exports.getEnvelopes = async (req, res, next) => {
    try {
        const envelopes = await db
        res.status(200).send(envelopes)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.getEnvelopeById = async (req, res) => {
    try {
        const {id} = req.params
        const envelopes = await db
        const envelope = findById(envelopes, id)

        if(!envelope){
            return res.status(400).send({message: "Envelope not found"})
        } 
        return res.status(200).send(envelope)
        
    } catch (error) {
        res.status(500).send(error)
    }
}