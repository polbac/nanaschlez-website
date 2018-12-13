import Prismic from 'prismic-javascript';
import config from '../config';

const api = () => new Promise(async (resolve, reject) => {
    if (global.prismic === undefined) {
        try {
            global.prismic = await Prismic.api(config.prismic.api);
        } catch(error) {
            console.log(error);
            reject('Cant connect Primic');
        }
    }

    resolve(global.prismic);
});

export const getBio = () => api().then(
    prismic => prismic.getByID(config.prismic.documents.bio)
);

export const getObras = () => api().then(
    prismic => prismic.query(Prismic.Predicates.at('document.type', 'art'))
);

export const fetchObraById = (id) => api().then(
    prismic => prismic.getByID(id)
);