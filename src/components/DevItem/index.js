import React from "react";
import './styles.css';

export default function DevItem({ dev }) {
  const { name, avatar_url, techs, bio, github_username } = dev;
  return (
    <li className="dev-item">
      <header>
        <img src={avatar_url} alt={name} />
        <div className="user-info">
          <strong>{name}</strong>
          <span>{techs.join(", ")}</span>
        </div>
      </header>
      <p>{bio}</p>
      <a href={`https://github.com/${github_username}`}>
        Acessar perfil no GitHub
      </a>
    </li>
  );
}
