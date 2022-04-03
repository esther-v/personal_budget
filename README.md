# Envelop budget API
## Routes & API endpoints
Action                   | Endpoint
-------------------------|--------------
GET all envelopes        | GET, "localhost:3000/envelopes/"
GET one specific envelop | GET, "localhost:3000/envelopes/id"
ADD one envelop          | POST, "localhost:3000/envelopes/"
UPDATE an envelop        | PUT, "localhost:3000/envelopes/id", request.body = {"concern": "", "budget": number}
DELETE an envelop        | DELETE, "localhost:3000/envelopes/id"
TRANSFER money           | POST, "localhost:3000/envelopes/transfer/:from/:to", request.body = {"amount" : number}
