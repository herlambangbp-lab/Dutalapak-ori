import Repository, { appid, baseUrl, serializeQuery } from './RepositoryIndex';
import cors from 'cors';
// import StaticCollectionRepository from '../repositories/static/StaticCollectionRepository';

class CollectionRepositoryIndex {
    constructor(callback) {
        this.callback = callback;
    //     const corsOptions = {
    //     origin: function (origin, callback) {
    //         if (whitelist.indexOf(origin) !== -1) {
    //         callback(null, true)
    //         } else {
    //         callback(new Error('Not allowed by CORS'))
    //         }
    //     }
    //     } 
    //    console.log( cors(corsOptions));
    }
    
    async getCollections(payload){
        // corsOptions();
        // console.log(payload);
    // const config = {
    //     method: 'get',
    //     url: `${baseUrl}/ecommerce/allproduct`,
    //     headers: { 'appid': appid }
    // }
    // const res = await axios(config)
        // const body = {
        //     // // allproduct
        //     limit : 7,
        //     p : 1,
        // };
        const reponse = await Repository.get(`${baseUrl}/ecommerce/allproduct?limit=7&p=1`,
        // body, 
        {
            headers: {
              'APPID': appid,
              'Access-Control-Allow-Headers' : 'Accept',
              'Access-Control-Allow-Origin' : '*',
              'Origin' : 'https://gogogogoog.com',
            }
        })

            .then(response => {
                // console.log(response);
               const result =  [];
               payload.forEach(item => {
                   result[item] = response.data.Data[item];
            });
                return result;

            })
            .catch(error => ({ error: JSON.stringify(error) }));
            // .catch(error => { 
            //     // console.log(error);
            //     const result =  [];
            //     payload.forEach(item => {
            //         result[item] = response.data.Data[item];
            // });
            //      return result;
            
            // });
        return reponse;
    }



}

export default new CollectionRepositoryIndex();
