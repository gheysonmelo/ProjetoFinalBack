export default interface Query {
    size: number,
    page: number,
    sort?: string|number,
    order?: string,
};