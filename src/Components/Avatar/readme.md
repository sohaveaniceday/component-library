# `<Avatar />`

Use an `<Avatar>` to display an image, a user icon or a placeholder with a string.

`list` prop will stack avatar but `<Avatar>` will need to be wrapped in `<AvatarList>` component.

`notification` prop takes an object with property placement (top or bottom) and colour. This is the dot on the avatar.

`placeholder` prop takes a string or the string 'icon' to render an icon of a user. Should `src` prop is provided, this will override `placeholder` and render an `img`.

`cssClasses` prop to add tailwind styles to the component.

`isButton` prop will highlight the `<Avatar>` when on focus/clicked on.