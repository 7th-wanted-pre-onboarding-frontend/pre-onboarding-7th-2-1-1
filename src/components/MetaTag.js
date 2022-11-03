import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

export default function MetaTag({ title, ogTitle, ogDescription, ogImage }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:title' content={ogTitle} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:image' content={ogImage} />
    </Helmet>
  );
}

MetaTag.prototype = {
  title: PropTypes.string.isRequired,
  ogTitle: PropTypes.string.isRequired,
  ogDescription: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired
};
