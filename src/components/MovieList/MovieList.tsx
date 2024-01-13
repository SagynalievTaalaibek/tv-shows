import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: number;
  name: string;
}

const MovieList: React.FC<Props> = ({ id, name }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border p-2"
      onClick={() => navigate(`shows/${id}`)}
      role="button"
    >
      {name}
    </div>
  );
};

export default MovieList;
