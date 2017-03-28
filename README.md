# Angular 2 Firebase App

An app boilerplate using:

- [Angular 2](https://github.com/search?q=topic%3Aangular+org%3Aangular&type=Repositories) (4, as soon as ngrx supports it...)
- [Angular CLI](https://github.com/angular/angular-cli)
- [Firebase (angularfire2)](https://github.com/angular/angularfire2)
- [Ngrx Store](https://github.com/ngrx/store) and [Ngrx Effects](https://github.com/ngrx/effects)

featuring:

- A full authentication pipeline including both Google and email authentication
- User accounts
- Business logic (using todos as an example)

*[View the demo](https://adviewer-73e3f.firebaseapp.com/)*

## Motivation

The purpose of this boilerplate is to provide a more advanced starting point for angular 2 apps that already features a well defined workflow, state management and design layout.

The template is designed to be easy to build upon and extend to suit your app.

## Quickstart

```bash
# clone the repo
git clone https://github.com/bave8672/angular-firebase-starter.git


# change directory to repo
cd angular-firebase-starter

# Use npm or yarn to install the dependencies:
npm install

# OR
yarn

# start the server
npm run start
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser

## Highlights

The following sections briefly cover the most important features of this starter app.

### Ngrx integration

All app state is managed via the redux pattern, using the [Ngrx Store](https://github.com/ngrx/store) implementation. Components allow the UI to fire actions, and contain minial business logic.

The store is architected similarly to the ngrx [example app](https://github.com/ngrx/example-app), with the global reducer composed from several sub-reducers to manage separate concerns.

[Effects](https://github.com/ngrx/effects) are used to handle asynchronous state events, such as interacting with the firebase auth and db services.

### Firebase authentication

The app supports firebase auth (via both Google OAuth and email/password) out of the box.

In the case of email auth, the app allows the user to update their password, profile picture and resend their verification email.

Adding other auth providers is straightforward: See the [firebase docs](https://firebase.google.com/docs/auth/web/start);

### Forms

Forms are always an important aspect of web applications. This starter attempts to standardise form interactions beyond what angular provides by:

- Exclusively using Angular's [reactive forms](https://angular.io/docs/ts/latest/guide/reactive-forms.html) module.
- Requiring all components to inherit from a base [FormComponent](./src/app/helpers/form.component.ts)
- Using an underlying [FormState](./src/app/store/formState.ts) to capture the state of every form (e.g whether a request is in-flight, whether to display an error message...) in a redux-friendly way.
- Providing a shared [validation message component](./src/app/shared/validation-message/validation-message.component.ts) to display validation warnings and messages.
- Providing various validation functions and helpers to e.g. parse errors from http results.

### Styles

[Bootstrap](http://getbootstrap.com/) CSS is included by default. To promote customisability, no custom css has been added to the boilerplate, and JQuery and bootstrap's Javascript packages have been excluded.

If you want to use something else like Foundation instead, simply remove the bootstrap package and update the styles.css to import your library of choice, and replace the markup classes with your own.

Since the project uses the CLI, you can also add your own CSS or SASS to components without any extra steps.

### Builds, environments and deployment

The project is set up to take advantage of firebase hosting.

Add your project's firebase config to [firebase.config.ts](.src/app/firebase/firebase.config.ts), the run

```bash
npm run build-deploy
```

to build the app in production mode and deploy to it to the firebase server.

You can add different firebase configurations for different environments - see the environment files.

In production mode the app's [custom error handler](./src/app/error-handler/custom-error-handler.ts) will post errors to your firebase db.

### Testing

Todo: Description (also actually write tests...)
