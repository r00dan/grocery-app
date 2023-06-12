# grocery-app

## With Docker and PostgreSQL

```sh
$ git checkout master
$ docker compose --env-file env/compose/dev up -d
```

## Manulally with SQLite3:

```sh
$ git checkout sqlite-without-docker
```

### Frontend:

```sh
$ yarn
$ yarn build
$ yarn start
```

### Backend: 

```sh
$ yarn
$ yarn start
```