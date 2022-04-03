const { resourceLimits } = require("worker_threads")
const db = require("../config/db")
const router = require("../routes/envelopes")

exports.getEnvelopes = async (req, res, next) => {
    try {
        const envelopes = await db
        res.status(200).send(envelopes)
    } catch (error) {
        res.status(400).send(error)
    }
}

