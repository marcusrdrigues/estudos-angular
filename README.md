<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,100:241773&height=120&section=header&text=Estudos%20Angular&fontColor=FFFFFF&fontSize=34&fontAlignY=38" width="100%" />
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Angular_20%2F21-0A0A0A?style=for-the-badge&logo=angular&logoColor=A78BFA" />
  <img src="https://img.shields.io/badge/TypeScript-0A0A0A?style=for-the-badge&logo=typescript&logoColor=A78BFA" />
  <img src="https://img.shields.io/badge/Angular_Material-0A0A0A?style=for-the-badge&logo=angular&logoColor=A78BFA" />
  <img src="https://img.shields.io/badge/Bootstrap-0A0A0A?style=for-the-badge&logo=bootstrap&logoColor=A78BFA" />
</p>

<p align="center">
  Minha trilha em <b>Angular moderno</b>: signals, control flow, rotas, microfrontends, guards e interceptors.<br/>
  Projetos desenvolvidos na formação <b>Front-End Angular</b> da <a href="https://www.cotiinformatica.com.br">Coti Informática</a> (out/2025 – fev/2026).
</p>

---

## 🗺️ A trilha

```text
SPA completa com CRUD e dashboard ──► Microfrontends com Module Federation ──► Angular Material + base de autenticação
               01                                   02                                     03
```

| # | Projeto | Quando | O que estudei |
|:-:|---|:-:|---|
| 01 | [`agenda-tarefas`](./01-agenda-tarefas) | out–nov/2025 | Meu primeiro projeto Angular, construído aula a aula: componentes, rotas, **signals**, **control flow** (`@if`/`@for`), serviços HTTP com CRUD completo, modularização, paginação e **dashboard com Highcharts**. Back-end simulado com `json-server` |
| 02 | [`microfrontends`](./02-microfrontends) | nov/2025 | Arquitetura de **microfrontends** com **Module Federation**: uma aplicação *shell* carregando `app-produtos` e `app-pedidos` de forma independente |
| 03 | [`servicos-material`](./03-servicos-material) | jan/2026 | Angular 21 com **Angular Material**: models, services, rotas, cadastro/consulta/dashboard de serviços e tela de login. Estrutura de **guard** e **interceptor** criada; a lógica de autenticação é o próximo passo 🚧 |

---

## 💡 O que essa trilha me ensinou

- **Reatividade com signals.** Estado mais simples e previsível do que encadear `subscribe` para tudo.
- **Organizar para crescer.** Separar *core* (models e services), *pages* e *shared* desde o começo (01) facilitou cada nova funcionalidade.
- **Segurança também é front-end.** Guards protegem rotas e interceptors centralizam o envio do token. No projeto 03 montei essa estrutura, e implementar a lógica completa é a próxima etapa.
- **Quando dividir o front.** Microfrontends resolvem times e deploys independentes, mas cobram em complexidade. Bom saber os dois lados.

---

## ▶️ Como rodar

```bash
cd 01-agenda-tarefas
npm install
npx json-server db.json   # API fake (projetos 01 e 03)
ng serve                  # http://localhost:4200
```

No projeto 02, suba cada aplicação (`shell`, `app-produtos`, `app-pedidos`) em um terminal com `ng serve <nome-do-projeto>`.

---

<p align="center">
  Repositório organizado a partir dos repositórios originais de cada projeto, com o <b>histórico de commits preservado</b>.<br/>
  <a href="https://github.com/marcusrdrigues">← Voltar ao perfil</a>
</p>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:241773,100:000000&height=90&section=footer" width="100%" />
</div>
