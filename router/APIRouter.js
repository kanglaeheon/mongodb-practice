const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");

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
        .catch(reason => {
            resp.status(500)
                .send("경로를 찾을 수 없습니다")
        })
    })

    return router;
}

//  라우터 내보내기
module.exports = APIRouter;