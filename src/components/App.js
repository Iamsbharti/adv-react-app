import React, { Component } from "react";
import { data } from "../testData";
import DataApi from "../state-api";
import ArticleList from "./ArticleList";
import axios from "axios";

const api = new DataApi(data);
class App extends Component {
  state = {
    articles: {},
    authors: {},
  };
  async componentDidMount() {
    const response = await axios.get("/data");
    const api = new DataApi(response.data);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors(),
    }));
  }
  loadAuthors = this.loadAuthors.bind(this);

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
