import { ApiData } from "../types/ApiData";

export const useApi = () => ({
    getMoviesList: async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();  
        return data as ApiData;
    }
})