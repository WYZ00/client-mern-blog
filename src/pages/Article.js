import React from "react";
import { useParams } from "react-router-dom";
import articles from "../components/article-content";
import Articles from "../components/Articles";
import NoteFound from "./NotFound";

const Article = () => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  if (!article) return <NoteFound />;
  const otherArticles = articles.filter((article) => article.name !== name);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
};

export default Article;
