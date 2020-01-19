import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  useEffect(() => {
    async function loadDevs() {
      await api.get("/devs").then(({ data }) => {
        setDevs(data);
      });
    }

    loadDevs();
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    await api
      .post("/devs", {
        github_username,
        techs,
        latitude,
        longitude
      })
      .then(({ data }) => {
        setTechs("");
        setGithubUsername("");
        setDevs([...devs, data]);
      });
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              name="github_username"
              id="username_github"
              required
              value={github_username}
              onChange={e => {
                setGithubUsername(e.target.value);
              }}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias </label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => {
                setTechs(e.target.value);
              }}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => {
                  setLatitude(e.target.value);
                }}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => {
                  setLongitude(e.target.value);
                }}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {devs.map(
            ({ _id, name, avatar_url, techs, bio, github_username }) => (
              <li key={_id} className="dev-item">
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
            )
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
