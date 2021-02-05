import axios from 'axios';

//local
// const baseStatis = 'http://localhost:3000';
const baseStatis = 'https://dutasparepart.co.id';
//sparepart
const baseDomain = 'https://dutasparepart.co.id';
// const baseDomain = 'https://localhost:4434';
// const baseDomain = 'http://192.168.3.202:7542';
// const baseDomain = 'http://localhost:7882/';
// 
//server
////local http://182.23.68.188:7542
//local
// export const appid = 'AMsK1blyOSJA2w9EYA0vn9wpJZkzUv99yAr2iXq3E5Syp1tyhferFqYeasMxtR9tp3xqH0bCqhSAiMdNbf7Dew7bK3eRjAIYqQby33ab2Wh1eu06Qmp6HWCDITnzMHKX';
//sparepart 
export const appid = 'jxEoV9fbQZ6tP3ol23jXYJzeqKTEaJipXobusMUaC77vkprIAL8OMJzExS9NMj3peO28hyPpO1v9k1y44douEVOp9PdQrUWM1CfZJhNbUyV5m6U5d4lMF2UcC2fmk3lT';
//publik 
// export const appid = 'Q8xl3vizSstDzvFdyIrnMasqUCBUZWaEZnzShNMqqqgWB116rlsOEx6gDxvvDpFj3D85m1NyFZpqusMnaeSPljo8SDio7Ze0qr6By8GnXUJUCLaoHeZbP314cdVPVguM';
const authorization_prefix = 'Bearer ';

export const customHeaders = {
    Accept: 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
};

export const baseUrl = `${baseDomain}/api`;
// export const baseUrl = `${baseDomain}`;
export const imageUrl = `${baseDomain}/ml3bu`;
// export const imageUrl = `${baseDomain}`;
export const staticUrl = `${baseStatis}`;
export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
