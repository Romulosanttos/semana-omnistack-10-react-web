import React, { useState, useEffect } from "react";

export default function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
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

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setTechs("");
    setGithubUsername("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input
          name="github_username"
          id="username_github"
          required
          value={github_username}
          onChange={({ target }) => {
            setGithubUsername(target.value);
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
          onChange={({ target }) => {
            setTechs(target.value);
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
            onChange={({ target }) => {
              setLatitude(target.value);
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
            onChange={({ target }) => {
              setLongitude(target.value);
            }}
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}
