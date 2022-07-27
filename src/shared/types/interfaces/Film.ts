export interface FilmInput {
    title: string,
    description?: string,
    release_year?: number,
    language_id: number,
    rental_duration: number,
    rental_rate: number,
    length?: number,
    replacement_cost: number,
    ranting?: string,    
    special_features?: string,
    fulltext: string, 
};

export interface FilmOutput {
    film_id: number,
    title: string,
    description: string,
    release_year: number,
    language_id: number,
    rental_duration: number,
    rental_rate: number,
    length: number,
    replacement_cost: number,
    ranting: string,
    last_update: Date,
    special_features: string,
    fulltext: string, 
};