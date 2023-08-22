# Git-Hub Users

Using the github API's, This app helps users to find any github user and view there newly pushed repos.

## Features

- Searches any gitHub User
- Seperate people for every individual user
- fetches only usefull information from github account
- Lastest 5 repos that the user have pushed
- Responsive

## API Reference

#### Get Github Users

```http
  GET /api/users
```

| Parameter             | Type     | End_Point_URL                                                                                                                |
| :-------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `api_key_search_user` | `string` | https://api.github.com/search/users?q=${text}&client_id=${YOUR.PERSONAL.CLIENT.ID}&client_secret=${YOUR.PEROSNAL.SERCRET.ID} |

#### Get User Repo

```http
  GET /api/user/:login
```

| Parameter | Type     | Description                                                                                                                                              |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`      | `string` | https://api.github.com/users/${username}/repos?per_page=5&sort=created:ascclient_id=${YOUR.PERSONAL.CLIENT.ID}&client_secret=${YOUR.PEROSNAL.SERCRET.ID} |

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install axios
  npm install react-router-dom
```

Start the server

```bash
  npm start
```
