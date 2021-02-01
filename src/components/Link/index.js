/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import LinkContainer from 'next/link';

export default function Link({ children, href, ...props }) {
  return (
    <LinkContainer href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </LinkContainer>
  );
}
