import React from "react";

interface Repository {
  title: string;
}

const RepositoryItens:React.FC<Repository> = ({title}:Repository) => {
  return (
    <ul>
      <li>
        <strong>{title}</strong>
        <p>qualquercoisa</p>
        <a href="www.github.com/pedrotakahashi"> Acessar repositorios</a>
      </li>
    </ul>
  );
};

export default RepositoryItens;
