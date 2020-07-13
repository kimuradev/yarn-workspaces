import React from 'react';

interface IProps {
  title: string;
}

export const H1: React.FC<IProps> = ({ title }) => <h1>{title}</h1>;
