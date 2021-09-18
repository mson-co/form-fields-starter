# FormFields Starter

A starter project for hosting your FormFields forms.

## Getting Started

- Go to [formfields.com](https://formfields.com) and build your form
- `git clone https://github.com/mson-co/form-fields-starter`
- `cd form-fields-starter`
- Modify [src/App.js](./src/App.js) and replace the `definition` with the one you exported from formfields.com
- `yarn start`

## Deploying to Production

- `yarn build`
- Upload the contents of the `build` directory to your web server

## Adding a FormFields Form to any React App

1. `yarn add mson-react`

2. Add `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">` to the head of your index.html, like [this](https://github.com/mson-co/form-fields-starter/pull/1/files#diff-c2cc24bc9001b11b6add48a4cd8f893d5d6c6e4d1bd254158bd14ab997f552cd)

3. Create a React component:
```js
import Component from "mson-react/lib/component";

// Substitute the following with your form definition
const definition = {
  "component": "Form",
  "fields": [
    {
      "name": "fullName",
      "label": "Full Name",
      "component": "PersonFullNameField"
    },
    {
      "name": "submit",
      "label": "Submit",
      "type": null,
      "icon": "Send",
      "component": "ButtonField"
    }
  ]
}
 
function MyForm() {
  return (
    <Component
      definition={definition}
      onSubmit={({ component }) => {
        alert(JSON.stringify(component.getValues()));
      }}
    />
  )
}

export default MyForm;
```

## Related Resources

- [How to autogenerate forms in React and Material-UI with MSON](https://redgeoff.com/posts/mson-react-material-ui-form/)
- [mson-react](https://github.com/redgeoff/mson-react) - UI Rendering Layer for React and Material-UI
- [mson](https://github.com/redgeoff/mson) - Generate an app from JSON

## create-react-app
form-fields-starter uses [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) with very [few changes](https://github.com/mson-co/form-fields-starter/pull/1/files).
