import React, { useState } from "react";
import PropTypes from "prop-types";
// import { useSelector } from 'react-redux';

import Header from "./Nav";
import Footer from "./Footer";

const PageLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <div>
        {children}
        <div />
      </div>
      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

PageLayout.defaultProps = {
  children: null,
};

export default PageLayout;
