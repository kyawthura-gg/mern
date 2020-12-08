import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, descriptions, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={descriptions} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to DemoShop",
  descriptions: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electronics",
};

export default Meta;
