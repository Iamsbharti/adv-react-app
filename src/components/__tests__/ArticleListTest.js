import ArticleList from "../ArticleList";
import renderer from "react-test-renderer";
import React from "react";

describe("Render ArticleList Component", () => {
  it("Render ArticleList Correctly", () => {
    const testProps = {
      articles: {
        a: { id: "1", authorId: "23" },
        b: { id: "2", authorId: "43" },
      },
    };
    const tree = renderer
      .create(
        <ArticleList
          articles={testProps.articles}
          loadAuthors={jest.fn(() => ({}))}
        />
      )
      .toJSON();
    //console.log(tree);
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
