class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  mapIntoObjects(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});
  }
  getArticles() {
    return this.mapIntoObjects(this.rawData.articles);
  }
  getAuthors() {
    return this.mapIntoObjects(this.rawData.authors);
  }
}
export default DataApi;
