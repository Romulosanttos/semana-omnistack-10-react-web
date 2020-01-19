import React from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias </label>
            <input name="techs" id="techs" required />
          </div>

          <div class="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/11372354?s=460&v=4"
                alt="Romulo Santos"
              />
              <div className="user-info">
                <strong>Romulo Santos</strong>
                <span>ReactJS, React Native, Node.js, Graphql</span>
              </div>
            </header>
            <p>Full Stack Developer</p>
            <a href="https://github.com/Romulosanttos">
              Acessar perfil no GitHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/11372354?s=460&v=4"
                alt="Romulo Santos"
              />
              <div className="user-info">
                <strong>Romulo Santos</strong>
                <span>ReactJS, React Native, Node.js, Graphql</span>
              </div>
            </header>
            <p>Full Stack Developer</p>
            <a href="https://github.com/Romulosanttos">
              Acessar perfil no GitHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/11372354?s=460&v=4"
                alt="Romulo Santos"
              />
              <div className="user-info">
                <strong>Romulo Santos</strong>
                <span>ReactJS, React Native, Node.js, Graphql</span>
              </div>
            </header>
            <p>Full Stack Developer</p>
            <a href="https://github.com/Romulosanttos">
              Acessar perfil no GitHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/11372354?s=460&v=4"
                alt="Romulo Santos"
              />
              <div className="user-info">
                <strong>Romulo Santos</strong>
                <span>ReactJS, React Native, Node.js, Graphql</span>
              </div>
            </header>
            <p>Full Stack Developer</p>
            <a href="https://github.com/Romulosanttos">
              Acessar perfil no GitHub
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
