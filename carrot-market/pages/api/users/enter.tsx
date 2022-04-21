import { NextApiRequest, NextApiResponse } from "next";
import client from '../../../libs/server/client';
import withHandler from "../../../libs/server/withHandler";

export default async function handler(
    req:NextApiRequest,res:NextApiResponse
){
    const { phone, email} = req.body;
    const payload = phone ? {phone:+phone} : {email};

    const user = await client.user.upsert({
        where: {
            ...payload
        },
        create:{
            name:'Anonymous',
            ...payload
        },
        update: {},
    });

    const token = await client.token.create({
        data: {
            payload:"1234",
            user:{
                connect: {
                    id: user.id
                }
            }
        }
    });

    console.log(token);
    

    // let user;
    // user = await client.user.upsert({
    //     where: {
    //         phone: +phone
    //     },
    //     create: {
    //         name:"Anonymous",
    //         phone: +phone,
    //     },
    //     update: {}
    // })
    return res.status(200).end();
}

// export default withHandler("POST",handler);



// console.log(req.body) => {"email":"rlarbxo157@naver.com"}
// console.log(req.body.email) => undefined 

// 왜 접근이 안될까? 
// req.body는 req 의 내용의 인코딩을 기준으로 parse 되기 때문이다. 
// 이를 해결하려면 요청하는쪽에 header 를 넣어줘서 ContentType: application/json 타입으로 요청해야함.




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 기존방식
    
    // if(email){
    //     user = await client.user.findUnique({
    //         where: {
    //             email,
    //         }
    //     });

    //     if(user) {
    //         console.log("found it")
    //     }

    //     if(!user){
    //        console.log('did not find. will create') 
    //        user = await client.user.create({
    //             data: {
    //                 name: "Anonymous",
    //                 email,
    //             }
    //         })
    //     }

    //     console.log(user);
    // }

    // if(phone){
    //     user = await client.user.findUnique({
    //         where: {
    //             phone:+phone,
    //         }
    //     });
    //     if(user) {
    //         console.log("found it")
    //     }
    //     if(!user){
    //        console.log('did not find. will create') 
    //        user = await client.user.create({
    //             data: {
    //                 name: "Anonymous",
    //                 phone:+phone,
    //             }
    //         })
    //     }
    //     console.log(user);
    // }