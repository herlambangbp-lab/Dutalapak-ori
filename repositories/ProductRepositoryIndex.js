import Repository, { appid, baseUrl, serializeQuery } from './RepositoryIndex';

class ProductRepositoryIndex {
    constructor(callback) {
        this.callback = callback;
    }

    async getKategori() {
        const reponse = await Repository.get(`${baseUrl}/ecommerce/DisplayProduct`)
            .then(response => {
                // console.log(response);
                return response.data.Data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }



    async getProductsByName(payload) {
        // console.log(response);
        // var querry = JSON.stringify(payload.payload); 
        // querry = querry.replace(/^"(.*)"$/, '$1');
        // console.log(payload.payload);
        // console.log(payload);
        // const formData = new FormData();
        // formData.append('name','');
        // formData.append('code',payload.payload)
        const reponse = await Repository.get(`${baseUrl}/ecommerce/ProductDetail`, {
            params: {
                name: "",
                code: payload.payload,
              }
        })
        // console.log(response);
            .then(response => {
                // console.log(response);
                
                return response.data.Data.productDetailViewModels.ProductDetail;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByKategori(payload) {
        // console.log(payload);
    // const config = {
    //     method: 'get',
    //     url: `${baseUrl}/ecommerce/allproduct`,
    //     headers: { 'appid': appid }
    // }
    // const res = await axios(config)
        // const body = {
        //     limit : 12,
        //     p : 1,
        // };
        const reponse = await Repository.get(`${baseUrl}/ecommerce/allproduct?limit=20&p=1`,
        // body, 
        {
            headers: {
              'APPID': appid,
              'origin': 'https://gogogogoog.com',
            }
        })
        .then(response => {
            // console.log(response);
            const  result = response.data.Data[payload.payload];

              
            console.log(result);
        //  console.log(result);
             return result;

         })
         .catch(error => ({ error: JSON.stringify(error) }));

        return reponse;
    }

    async getRecords(params) {
        console.log(params);
        const body = {
            filter : params,
        }
        // console.log(serializeQuery(params));
        const reponse = await Repository.post(`${baseUrl}/ecommerce/Search`,
        body,
        {
            headers: {
              'appid': appid
            }
        }
        )
            .then(response => {
                return response.data.Data.ProductList;
                // console.log(response.data.Data);
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }



}

export default new ProductRepositoryIndex();
