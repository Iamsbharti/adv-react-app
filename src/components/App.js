import React, { Component } from "react";
import { data } from "../testData";
import DataApi from "../DataApi";
import ArticleList from "./ArticleList";

const api = new DataApi(data);
class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
    this.loadAuthors = this.loadAuthors.bind(this);
  }
  loadAuthors(authorId) {
    return this.state.authors[authorId];
  }
  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          loadAuthors={this.loadAuthors}
        />
      </div>
    );
  }
}
export default App;
