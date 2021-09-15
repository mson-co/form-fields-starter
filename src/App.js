import Component from "mson-react/lib/component";

const definition = {
  "component": "Form",
  "fields": [
    {
      "name": "fullName",
      "label": "Full Name",
      "component": "PersonNameField"
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

function App() {
  return (
    <Component
      definition={definition}
      onSubmit={({ component }) => {
        alert(JSON.stringify(component.getValues()));
      }}
    />
  )
}


export default App;
