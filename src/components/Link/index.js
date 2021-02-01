/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import LinkContainer from 'next/link';
import styled from 'styled-components';

const LinkBase = styled(LinkContainer)`
  border: 1px solid;
`;

export default function Link({ children, href, ...props }) {
  return (
    <LinkBase href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </LinkBase>
  );
}
