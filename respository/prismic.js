import Prismic from 'prismic-javascript';
import config from '../config';

const api = () => new Promise(async (resolve, reject) => {
    try {
        global.prismic = await Prismic.api(config.prismic.api, { apiDataTTL: 0 });
    } catch(error) {
        console.log(error);
        reject('Cant connect Primic');
    }

    resolve(global.prismic);
});

export const getObra = (type) => api().then(
    prismic => {
        return prismic.query(
            [
                Prismic.Predicates.at('document.tags', [type]),
            ]
        )
    }
);

export const getCommitment = () => api().then(
    prismic => {
        return prismic.query(
            [
                Prismic.Predicates.at('document.tags', ['pedido']),
            ]
        )
    }
);

export const getBio = () => api().then( 
    prismic => prismic.getByID(config.prismic.documents.bio)
);

export const getRandomStuff = () => api().then(
    prismic => prismic.query(Prismic.Predicates.at('document.type', 'random-stuff'))
);

export const getShop = () => api().then(
    prismic => prismic.query(Prismic.Predicates.at('document.type', 'shop'))
);

export const getObras = () => api().then(
    prismic => prismic.query(Prismic.Predicates.at('document.type', 'art'))
);

export const getIlustraciones = () => api().then(
    prismic => prismic.query(Prismic.Predicates.at('document.type', 'ilustraciones'))
);


export const getMurales = () => api().then(
    prismic => prismic.query(Prismic.Predicates.at('document.type', 'mural'))
);

export const fetchObraById = (id) => api().then(
    prismic => prismic.getByID(id)
);

export const fetchIlustracionById = (id) => api().then(
    prismic => prismic.getByID(id)
);

export const fetchMuralById = (id) => api().then(
    prismic => prismic.getByID(id)
);

export const fetchWorkshop = () => api().then(
    prismic => prismic.getByID(config.prismic.documents.workshop)
);