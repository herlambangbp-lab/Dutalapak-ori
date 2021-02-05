export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}

export function getColletionBySlug(collections, slug) {
    // console.log(collections);
    const result = collections[slug];        
    // console.log(result);
    if (result !== undefined) {
            return result;
        } else {
            const result = ['null'];
            return result;
            
        }

    // if (result.length > 0) {
    //         return result;
    // } else {
    //     return [];
    // }
      
    // if (collections.length = 0) {
    //     // const result = collections.find(item => item.slug === slug.toString());
        
    //     if (result.length > 0) {
    //         return result.products;
    //     } else {
    //         return [];
    //     }
    // } else {
    //     return [];
    // }
}

// new Date(parseInt(item.DateBuying.replace(/[^0-9 +]/g, '')))
export function cSharpDateCovert(dateString) {
    if (dateString) {
        const d = new Date(parseInt(dateString.replace(/[^0-9 +]/g, '')))
        var dName = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
        var mName = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
        return `${dName[d.getDay()]}, ${d.getDate()} ${mName[d.getMonth()]} ${d.getFullYear()}`;
      } else {
        return 'Date not found';
      }
}
// export const cSharpDateCovert = (dateString:string) => {
//   if (dateString) {
//     const d = new Date(parseInt(dateString.replace(/[^0-9 +]/g, '')))
//     var dName = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
//     var mName = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
//     return `${dName[d.getDay()]}, ${d.getDate()} ${mName[d.getMonth()]} ${d.getFullYear()}`;
//   } else {
//     return 'Date not found';
//   }
// }
export function stringDateConvert(dateString) {
    if (dateString!=='') {
        const d = new Date(dateString)
        var dName = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
        var mName = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
        return `${dName[d.getDay()]}, ${d.getDate()} ${mName[d.getMonth()]} ${d.getFullYear()}`;
      } else {
        return '';
      }
}
// export const stringDateConvert = (dateString:string) => {
//   if (dateString!=='') {
//     const d = new Date(dateString)
//     var dName = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
//     var mName = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
//     return `${dName[d.getDay()]}, ${d.getDate()} ${mName[d.getMonth()]} ${d.getFullYear()}`;
//   } else {
//     return '';
//   }
// }
export function monthNameIndonesia(m) {
    var mName = ['','Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return mName[m]
}
// export const monthNameIndonesia = (m:number)=>{
//   var mName = ['','Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
//   return mName[m]
// }
export function stringDateConvertforApi(dateString) {
    if (dateString!=='') {
        const d = new Date(dateString)
        return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
      } else {
        return '';
      }
}
// export const stringDateConvertforApi = (dateString:string) => {
//   if (dateString!=='') {
//     const d = new Date(dateString)
//     return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
//   } else {
//     return '';
//   }
// }

export function statusTransaksi(dataString) {
    let statusText= '';
    if (dataString) {
        switch (dataString) {
            case 'Processed':
                statusText = "Pesanan diproses";
                return `${statusText}`;
                break;
            case 'Cancelled':
                statusText = "";
                break;
            case 'Timelimitcanceled':
                statusText = "Waktu Pembayaran Habis";
                return `${statusText}`;
                break;
            case 'Waiting':
                statusText = "Pesanan belum dibayar";
                return `${statusText}`;
                break;
            case 'PaymentVerified':
                statusText = "Pembayaran terverifikasi";
                return `${statusText}`;
                break;
            case 'Shipping':
                statusText = "Pesanan dikirim";
                return `${statusText}`;
                break;
            case 'Complete':
                statusText = "Pesanan selesai";
                return `${statusText}`;
                break;
            case 'PaymentDeclined':
                statusText = "Pembayaran ditolak";
                return `${statusText}`;
                break;
            case 'UpdateReceipt':
                statusText = "Nomor Resi diperbarui";
                return `${statusText}`;
                break;                                                                                                                                        
            default:
                break;
        }
        // console.log(statusText);
        return `${statusText}`;
    }
}