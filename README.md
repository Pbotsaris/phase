# Phasing-it

Design deck [here](https://docs.google.com/presentation/d/1x8_tUvk-rBXJtD8WSb3J5taBcEmnZmbwopS1JqC9JyQ/edit#slide=id.gec54c6b315_0_88).

Assets received from the design/animator are located in the `assets/` directory under. They are organized by the date received.

All assets used in the application must be copied to the `public/` folder to its respective folder e.g. `images/` for svgs `audio/` for audiofiles.


## Style guidelines

### CSS

Please use descriptive names and let's try to follow the [BEM](http://getbem.com/naming/) convention if possible.

### JS

- functions no longer than 15/20 lines
- descriptive names
- always camelCase
- keep compnents as small as possible

## Contributing

Always create a branch before working on the app.
    
    git checkout -b <brachname>

push your branch to the repo:

    git push origin <branchname>

Create a pull request on Github .

## Run dev server

```bash
npm run dev
```
Navigate to [localhost:5000](http://localhost:5000). 

## Building and running in production mode

```bash
npm run build
```
You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```
If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).

## Deployment

### [surge](https://surge.sh/)

```bash
npm run build
surge public my-project.surge.sh
```
