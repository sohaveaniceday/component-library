# `<Modal />`

Use a `<Modal>` to optionally display a subordinate child element overlaying your main window.

`visible` prop takes a boolean to either display your modal or remove your modal. Use state to manage this.

`closable` prop takes a boolean which dictates whether it will display a cross button in the top right of the element, which triggers the onClose function.

`closeOnEsc` prop takes a boolean which dictates whether the escape button can be used to trigger the onClose function.

`onClose` prop takes a function which dictates what happens when any of the modal's close actions are triggered.
