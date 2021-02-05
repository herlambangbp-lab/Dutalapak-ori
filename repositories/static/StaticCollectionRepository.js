import collections from '../../public/static/data/static-collections.json';

class StaticCollectionRepository {
    constructor(callback) {
        this.callback = callback;
    }

    getCollections(payload) {
        // console.log(collections);
        
        const result =  collections.Data;
        // console.log(result);
        payload.forEach(item => {
            result[item] = result[item];
        });
        // console.log(result);
         return result;
        // const result = collections.filter(({ slug }) => {
        //     return payload.includes(slug);
        // });
        // return result;
    }
}

export default new StaticCollectionRepository();
