import Repository, { baseUrl, serializeQuery, appid } from './RepositoryIndex';

class UserAccessRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getLogin(data){
        const body = {};
        const reponse = await Repository.post(`${baseUrl}/member/login?username=${data.username}&password=${data.password}`, 
        body, {
          headers: {
            'appid': appid
          }
        })
        .then((res) => {
          return res.data;
            
          })
        .catch(error => ({ error: JSON.stringify(error) }));
          return reponse;

    }


  async getProfil(data){
    console.log(data);
    const body = {
      acctoken : data.AccessToken,
    };
    const reponse = await Repository.post(`${baseUrl}/member/accountinfo`, 
    body, {
      headers: {
        'appid': appid,
        'RequestVerificationToken': data.RequestVerificationToken,
      }
    })
    .then((res) => {
      // console.log(res);
      return res.data;
        
      })
    .catch(error => ({ error: JSON.stringify(error) }));
      return reponse;
  }

  async getProfilEdit(data){
    // console.log(data);
    // const body = {
    //   acctoken : data.AccessToken,
    //   RequestVerificationToken : data.RequestVerificationToken,
    // };
    const reponse = await Repository.get(`${baseUrl}/Member/ProfileEdit?acctoken=${data.AccessToken}&RequestVerificationToken=${data.RequestVerificationToken}`, 
    {
      headers: {
        'appid': appid,
        'RequestVerificationToken': data.RequestVerificationToken,
      }
    })
    .then((res) => {
      // console.log(res);
      return res.data.Data;
        
      })
    .catch(error => ({ error: JSON.stringify(error) }));
      return reponse;
  }



  async getRegis(data){
        // local AMsK1blyOSJA2w9EYA0vn9wpJZkzUv99yAr2iXq3E5Syp1tyhferFqYeasMxtR9tp3xqH0bCqhSAiMdNbf7Dew7bK3eRjAIYqQby33ab2Wh1eu06Qmp6HWCDITnzMHKX
        // sparepart jxEoV9fbQZ6tP3ol23jXYJzeqKTEaJipXobusMUaC77vkprIAL8OMJzExS9NMj3peO28hyPpO1v9k1y44douEVOp9PdQrUWM1CfZJhNbUyV5m6U5d4lMF2UcC2fmk3lT
        // publik Q8xl3vizSstDzvFdyIrnMasqUCBUZWaEZnzShNMqqqgWB116rlsOEx6gDxvvDpFj3D85m1NyFZpqusMnaeSPljo8SDio7Ze0qr6By8GnXUJUCLaoHeZbP314cdVPVguM
    const body = {
      username : data.username,
      email : data.email,
      password : data.password,
    };
    const reponse = await Repository.post(`${baseUrl}/member/register`, 
    body, {
      headers: {
        'appid': appid
      }
    })
    .then((res) => {
      
        // console.log(res.data)
        return res.data;
      })
    .catch(error => ({ error: JSON.stringify(error) }));
      return reponse;
}

async getupdateProfil(data){
  // console.log(data.data);
  const body = {
    memberFullName : data.data.diUpdate.full_name,
    phone: data.data.diUpdate.phone_number,
    memberAddressPostalCode : data.data.diUpdate.code_pos,
    memberAddress : data.data.diUpdate.address,
    memberAddressCity : data.data.diUpdate.kota,
    memberAddressDistrict: data.data.diUpdate.kecamatan,
    memberAddressSubDistrict : data.data.diUpdate.kelurahan,
    accToken:  data.data.AccessTokenUser,
  };
  // console.log(body);
  const reponse = await Repository.post(`${baseUrl}/Member/ProfileEdit`, 
  body, {
    headers: {
      'appid': appid,
      'RequestVerificationToken': data.data.RequestVerificationTokenUser,
    }
  })
  .then((res) => {
    
      // console.log(res.data)
      return res.data;
    })
  .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;
}

async getHistory(data){
  console.log(data);
  const body = {
    AccToken : data.data.acc,
  };
  const reponse = await Repository.get(`${baseUrl}/ecommerce/ECommerceTransactionOrderList`,{
    params: {
      AccToken: data.data.acc,
      // code: payload.payload,
    }, 
    headers: {
      'appid': appid,
      'RequestVerificationToken': data.data.req,

    }
  

  })
  // body, {
  //   headers: {
  //     'appid': appid,
  //     'RequestVerificationToken': data.data.req,

  //   }
  .then((res) => {
    // console.log(res);
    return res.data;
      
    })
  .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;

}

async getTransaksiDetail(data){
  // console.log(data);
  // const body = {
  //   AccToken : data.data.acc,
  // };
  const reponse = await Repository.get(`${baseUrl}/ecommerce/ECommerceOrderDetail`,{
    params: {
      AccToken: data.accToken,
      orderNumber: data.numTransaksi,
      // code: payload.payload,
    }, 
    headers: {
      'appid': appid,
      'RequestVerificationToken': data.reqVerif,

    }
  

  })
  // body, {
  //   headers: {
  //     'appid': appid,
  //     'RequestVerificationToken': data.data.req,

  //   }
  .then((res) => {
    // console.log(res.data);
    return res.data;
      
    })
  .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;

}



}

export default new UserAccessRepository();
