## Envelop budget API
# Routes & API endpoints
    *GET all envelopes => GET, "localhost:3000/envelopes/"
    *GET one specific envelop => GET, "localhost:3000/envelopes/id"
    *ADD one envelop => POST, "localhost:3000/envelopes/"
    *UPDATE one specific envelop => PUT, "localhost:3000/envelopes/id", request.body = {"concern": "", "budget": ""}
    *DELETE one specific envelop
Action                   | Endpoint
-------------------------|--------------
GET all envelopes        | GET, "localhost:3000/envelopes/"
GET one specific envelop | GET, "localhost:3000/envelopes/id"
ADD one envelop          | POST, "localhost:3000/envelopes/"
UPDATE an envelop        | PUT, "localhost:3000/envelopes/id", request.body = {"concern": "", "budget": ""}
DELETE an envelop        | Content Cell
TRANSFER money           | Content Cell
