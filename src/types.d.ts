import React from 'react';

interface Movie {
  id: number;
  name: string;
  language: string;
  image: string;
  summary: React.ReactElement;
}

interface ApiMovie {
  score: number;
  show: {
    id: number;
    name: string;
    language: string;
    image: {
      medium: string;
    };
    summary: React.ReactElement;
  };
}

interface ApiOneMovie {
  id: number;
  name: string;
  language: string;
  image: {
    medium: string;
  };
  summary: React.ReactElement;
}
