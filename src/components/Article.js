import React from "react";
const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: "solid",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    fontSize: "0.8em",
    color: "#888",
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  },
};
const dateFormat = (date) => {
  return new Date(date).toDateString();
};

function Article({ article, loadAuthor }) {
  //console.log(article);
  const author = loadAuthor(article.authorId);
  //console.log(author);
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateFormat(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName}
          {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
}
export default Article;
