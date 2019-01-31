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

export const getBio = () => api().then(
    prismic => prismic.getByID(config.prismic.documents.bio)
);

export const getRandomStuff = () => api().then(
    prismic => prismic.query(Prismic.Predicates.at('document.type', 'random-stuff'))
);

export const getObras = () => api().then(
    prismic => prismic.query(Prismic.Predicates.at('document.type', 'art'))
);

export const getIlustraciones = () => api().then(
    prismic => prismic.query(Prismic.Predicates.at('document.type', 'ilustraciones'))
);

export const fetchObraById = (id) => api().then(
    prismic => prismic.getByID(id)
);

export const fetchIlustracionById = (id) => api().then(
    prismic => prismic.getByID(id)
);

export const fetchWorkshop = () => api().then(
    prismic => prismic.getByID(config.prismic.documents.workshop)
);