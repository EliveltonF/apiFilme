const API_KEY = '957c497c18efd43cdddc682b73581380';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}



export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                titulo: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=957c497c18efd43cdddc682b73581380`)
            },
            {
                slug: 'trending',
                titulo: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=957c497c18efd43cdddc682b73581380`)
            },
            {
                slug: 'toprated',
                titulo: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=957c497c18efd43cdddc682b73581380`)
            },
            {
                slug: 'Action',
                titulo: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&languagem=pt-BR&api_key=957c497c18efd43cdddc682b73581380`)
            },
            {
                slug: 'comedy',
                titulo: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&languagem=pt-BR&api_key=957c497c18efd43cdddc682b73581380`)
            },
            {
                slug: 'horror',
                titulo: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&languagem=pt-BR&api_key=957c497c18efd43cdddc682b73581380`)
            },
            {
                slug: 'romance',
                titulo: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&languagem=pt-BR&api_key=957c497c18efd43cdddc682b73581380`)
            },
            {
                slug: 'documentary',
                titulo: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&languagem=pt-BR&api_key=957c497c18efd43cdddc682b73581380`)
            }
        ];
    }
}
