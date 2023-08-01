import React from "react";
import articles from "../components/article-content";

import Articles from "../components/Articles";

const AritclesList = () => {
  return (
    <div>
      <h1>Articles</h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default AritclesList;
