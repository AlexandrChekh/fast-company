const paginate = (pageNumber, pageSize, items) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
};
export default paginate;
