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

exports.addEnvelope = async (req, res) => {
    try {
        const {concern, budget} = req.body

        const envelopes = await db
        const newId = createId(envelopes)
        const newEnvelope = {
            id: newId,
            concern,
            budget
        }
        envelopes.push(newEnvelope)
        res.status(201).send(newEnvelope)
    } catch (error) {
      res.status(500).send(error) 
    }
}

exports.updateEnvelope = async (req, res) => {
    try {
        const {id} = req.params
        const {concern, budget} = req.body

        const envelopes = await db
        const envelope = findById(envelopes, id)

        if(!envelope){
            return res.status(404).send({
                message: "Envelope not found"
            })
        }
        envelope.concern = concern
        envelope.budget = budget
        res.status(201).send(envelopes)
        
    } catch (error) {
        res.status(500).send(error)
    } 
}

exports.deleteEnvelope = async (req, res) => {

    try {
        const {id} = req.params
        const envelopes = await db
        const envelope = findById(envelopes, id)


        if(!envelope) {
            return res.status(404).send({message: "Envelope not found"})
        }

        const updatedEnvelopes = deleteById(envelopes, id)
        return res.status(204).send(updatedEnvelopes)
        
    } catch (error) {
        res.status(500).send(error)
    }  
}

exports.transfer = async (req, res) => {
    try {
        const envelopes = await db
        const {fromId, toId} = req.params
        const {amount} = req.body

        const originEnv = findById(envelopes, fromId)
        const destinationEnv = findById(envelopes, toId)

        if (!originEnv || !destinationEnv) {
            return res.status(404).send({
                message: "Envelope not found"
            })
        }

        if (originEnv.budget < amount) {
            return res.status(400).send({
                message: `amount not available in the ${originEnv.concern} envelop`
            })
        }

        originEnv.budget -= amount
        destinationEnv.budget += amount

        return res.status(201).send(originEnv)
        
    } catch (error) {
        res.status(500).send(error)
    }
}