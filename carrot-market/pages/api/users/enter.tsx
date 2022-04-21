import { NextApiRequest, NextApiResponse } from "next";
import client from '../../../libs/server/client';
import withHandler from "../../../libs/server/withHandler";

export default async function handler(
    req:NextApiRequest,res:NextApiResponse
){

    console.log('asd');
    console.log(req.body);
    return res.status(200).end();
}

// export default withHandler("POST",handler);



// console.log(req.body) => {"email":"rlarbxo157@naver.com"}
// console.log(req.body.email) => undefined 

// 왜 접근이 안될까? 
// req.body는 req 의 내용의 인코딩을 기준으로 parse 되기 때문이다. 
// 이를 해결하려면 요청하는쪽에 header 를 넣어줘서 ContentType: application/json 타입으로 요청해야함.
