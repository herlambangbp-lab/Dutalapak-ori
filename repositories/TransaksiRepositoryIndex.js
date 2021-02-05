import Repository, { baseUrl, serializeQuery, appid } from './RepositoryIndex';

class TransaksiRepositoryIndex {
    constructor(callback) {
        this.callback = callback;
    }

    async getCodePayment() {
      const body = {
        transType : 'eCommerce',
      }
      // http://192.168.3.202:7542/api/Payment/PaymentMethod?transType=eCommerce
      // console.log(serializeQuery(params));
      const reponse = await Repository.post(`${baseUrl}/Payment/PaymentMethod`,
      body,
      {
          headers: {
            'appid': appid
          }
      }
      )
          .then(response => {
              return response.data.Data;
              // console.log(response.data.Data);
          })
          .catch(error => ({ error: JSON.stringify(error) }));
      return reponse;
  }

  async getCodeKurir(data) {
    // console.log(data);
    const body = {
      // transType : 'eCommerce',
      accToken: data.AccessToken,
    }
    // http://192.168.3.202:7542/api/Payment/PaymentMethod?transType=eCommerce
    // console.log(serializeQuery(params));
    const reponse = await Repository.post(`${baseUrl}/Cargo/Supplier`,
    body,
    {
        headers: {
          'appid': appid,
          'RequestVerificationToken': data.RequestVerificationToken,
        }
    }
    )
        .then(response => {
            return response.data;
            // console.log(response);
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;
}

  async addOrderPayment(data) {
    const {dataAccount, dataTransaksi} = data;

    console.log(dataTransaksi);

    const cartItems = [];
    const addressFix = [];
    
    for (let i = 0; i < dataTransaksi.data.cartItems.length; i++) {
      cartItems[i] = {
            idItem: '',
            idProduct: dataTransaksi.data.cartItems[i].pilihanStoct.ProductID,
            idProductParent:'',
            idWarehouse: dataTransaksi.data.cartItems[i].pilihanStoct.WarehouseID,
            imageProduct: dataTransaksi.data.cartItems[i].product.ImageList[0].ImageProductPath,
            minimumOrder: dataTransaksi.data.cartItems[i].pilihanStoct.MinimumOrder,
            normalPriceProduct: dataTransaksi.data.cartItems[i].harga,
            noteProduct:"Noted",
            priceProduct: dataTransaksi.data.cartItems[i].harga,
            productCode: dataTransaksi.data.cartItems[i].codes,
            qtyProduct: dataTransaksi.data.cartItems[i].quantity,
            selected:'TRUE',
            subTotal: dataTransaksi.data.cartItems[i].harga,
            titleProduct: dataTransaksi.data.cartItems[i].pilihanStoct.ProductName,
            unitWeightProduct: dataTransaksi.data.cartItems[i].product.ProductUnitWeight,
            varianName: dataTransaksi.data.cartItems[i].pilihanStoct.ProductVarianName,
            weightProduct: dataTransaksi.data.cartItems[i].product.ProductWeight,
      };
      
      
    }
    // console.log(dataTransaksi.data.setAddress.isDropship);
    if (dataTransaksi.data.setAddress.isDropship == true) {
      addressFix[0] = {
        buyerAddress: dataTransaksi.data.setAddress.dataFix.setData.memberAddress,
        buyerCity: dataTransaksi.data.setAddress.dataFix.setData.memberAddressCity,
        buyerDistrict: dataTransaksi.data.setAddress.dataFix.setData.memberAddressDistrict,
        buyerName: dataTransaksi.data.setAddress.dataFix.setData.memberFullName,
        buyerPhone: dataTransaksi.data.setAddress.dataFix.setData.phone,
        buyerProvince: 'JAWA TIMUR',
        buyerSubDistrict: dataTransaksi.data.setAddress.dataFix.setData.memberAddressSubDistrict,
        
        receiverAddress: dataTransaksi.data.setAddress.dataFix.setDataDropship.memberAddress,
        receiverCity: dataTransaksi.data.setAddress.dataFix.setDataDropship.memberAddressCity,
        receiverDistrict: dataTransaksi.data.setAddress.dataFix.setDataDropship.memberAddressDistrict,
        receiverName: dataTransaksi.data.setAddress.dataFix.setDataDropship.memberFullName,
        receiverPhone: dataTransaksi.data.setAddress.dataFix.setDataDropship.phone,
        receiverProvince: 'JAWA TIMUR',
        receiverSubDistrict: dataTransaksi.data.setAddress.dataFix.setDataDropship.memberAddressSubDistrict,
        
      };
      console.log('ini dropsip');
    } else {
      // console.log(addrassFix);
      addressFix[0] = {
        buyerAddress: dataTransaksi.data.setAddress.dataFix.setData.memberAddress,
        buyerCity: dataTransaksi.data.setAddress.dataFix.setData.memberAddressCity,
        buyerDistrict: dataTransaksi.data.setAddress.dataFix.setData.memberAddressDistrict,
        buyerName: dataTransaksi.data.setAddress.dataFix.setData.memberFullName,
        buyerPhone: dataTransaksi.data.setAddress.dataFix.setData.phone,
        buyerProvince: 'JAWA TIMUR',
        buyerSubDistrict: dataTransaksi.data.setAddress.dataFix.setData.memberAddressSubDistrict,
        
        receiverAddress: dataTransaksi.data.setAddress.dataFix.setData.memberAddress,
        receiverCity: dataTransaksi.data.setAddress.dataFix.setData.memberAddressCity,
        receiverDistrict: dataTransaksi.data.setAddress.dataFix.setData.memberAddressDistrict,
        receiverName: dataTransaksi.data.setAddress.dataFix.setData.memberFullName,
        receiverPhone: dataTransaksi.data.setAddress.dataFix.setData.phone,
        receiverProvince: 'JAWA TIMUR',
        receiverSubDistrict: dataTransaksi.data.setAddress.dataFix.setData.memberAddressSubDistrict,
        
      };
      console.log('ini tanpa drop');
    }

  // console.log(addressFix[0]);
    // console.log('yeyeyeye');
    
    const body = {
            buyerAddress: addressFix[0].buyerAddress,
            buyerCity: addressFix[0].buyerCity,
            buyerDistrict: addressFix[0].buyerDistrict,
            buyerName: addressFix[0].buyerName,
            buyerPhone: addressFix[0].buyerPhone,
            buyerProvince: 'JAWA TIMUR',
            buyerSubDistrict: addressFix[0].buyerSubDistrict,
            
            isDropship: dataTransaksi.data.setAddress.dataFix.isDropship,
            
            postCode: dataTransaksi.data.setAddress.dataFix.setData.memberAddressPostalCode,
            
            receiverAddress: addressFix[0].receiverAddress,
            receiverCity: addressFix[0].receiverCity,
            receiverDistrict: addressFix[0].receiverDistrict,
            receiverName: addressFix[0].receiverName,
            receiverPhone: addressFix[0].receiverPhone,
            receiverProvince: 'JAWA TIMUR',
            receiverSubDistrict: addressFix[0].receiverSubDistrict,
            
            selectedBank: data.dataTransaksi.data.paymentMethode.code,
            shippingPrice:0,
            shippingService:'REG',
            totalPrice: data.dataTransaksi.data.itemPayTotal-5000,
            totalPriceOrder: data.dataTransaksi.data.itemPayTotal-5000,
            voucher:'',
            voucherPrice:'',
            accToken: data.dataAccount.AccessToken,
            AccessMethod:'Web',
            productList: cartItems,

    }
    // console.log(body.productList[0]);
    console.log(body);
    const reponse = await Repository.post(`${baseUrl}/eCommerce/orderCart`,
    body, 
    {
      timeout: 5000,
        headers: {
          'appid': appid,
          'RequestVerificationToken': data.dataAccount.RequestVerificationToken,
        },
    }
    )

        .then(response => {
          // console.log(response);
          // setTimeout(10000)
          // setTimeout(function(){ alert("Hello"); }, 3000);
          // window.location.href('/account/DokuStaging/'+encodeURI(JSON.stringify(response.Data)));
            return response;
            
            // console.log(response.data.Data);
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;
}
async getTarifKurir(data) {
//   Pieces[0].grossWeight:1
// Pieces[0].height:10
// Pieces[0].length:10
// Pieces[0].width:10
const PiecesAll = [];


for (let i = 0; i < 1; i++) {
  PiecesAll[i] = {
    grossWeight:1,
    height:10,
    length:10,
    width:10,
  };
  
  
}
  // console.log(data);
  const body = {
    // transType : 'eCommerce',
    // supplier :'SiCepat',
    Key: '07012021175228',
    destination: 'SUB10000',
    pickup: 'SDA',
    supplier: 'SiCepat',
    Pieces:PiecesAll,
    // grossWeight: '1',
    // height: '10',
    // length: '10',
    // width: '10',
  }
  // http://192.168.3.202:7542/api/Payment/PaymentMethod?transType=eCommerce
  // console.log(serializeQuery(params));
  const reponse = await Repository.post(`${baseUrl}/Cargo/CheckTariff`,
  body,
  {
      headers: {
        'appid': appid
      }
  }
  )
      .then(response => {
          return response.data.Data;
          // console.log(response);
          // console.log(response.Data);
          // console.log(response.Dat);
      })
      .catch(error => ({ error: JSON.stringify(error) }));
  return reponse;
}



}

export default new TransaksiRepositoryIndex();
