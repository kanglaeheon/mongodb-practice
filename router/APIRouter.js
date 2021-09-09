const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");

function APIRouterEach(app) {
    router.get("/:id" + ".json/", (req, resp) => {
        console.log("보여줄 ID: ", req.params.id);

        let db = app.get("db");
        db.collection('friends')
        .findOne({_id: ObjectId(req.params.id)})
        .then(result => {
            resp.status(200)
                .header({"Content-Type": "text/json;charset=UTF-8"})
                .json(result);
        })
    })

    
}

function APIRouter(app) {
    router.get("/friends.json", (req, resp) => {
        let db = app.get("db");
        
        db.collection("friends").find().toArray()
        .then(result => {
            //  json 결과 출력
            resp.status(200)
                .header({"Content-Type": "text/json;charset=UTF-8"})
                .json(result);
        })
    })

    return router;
}

//  라우터 내보내기
module.exports = APIRouter;