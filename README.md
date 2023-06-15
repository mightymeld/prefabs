# MightyMeld Prefabs

## About Prefabs

Prefabs are React component templates with just enough props to work as a solid building block.

| Without Prefabs | With Prefabs                                                                                             |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| `<Button />`    | <pre>`<Button>Button</Button>`</pre>                                                                     |
| `<Alert />`     | <pre>`<Alert severity="warning">`<br>`  <AlertTitle>Title</AlertTitle>`<br>`  Description`<br>`</Alert>` |

## File Format

Each prefab collection is an ordinary JSX file containing exported React components. Each component is treated as a prefab.

**Note:** dependencies must be imported like you would in any other project. MightyMeld will look at
those imports when adding prefabs to your project in case the imports need to be added to your code
as well.

```jsx
// When adding `<Button>Button<Button>` to your code,
// MightyMeld will also add an import from `@mui/material`
import { Button } from '@mui/material'

const MyButton = () => <Button>Button</Button>
```

Leading or trailing underscores (`_`) in component names will be ignored by MightyMeld studio. This
helps avoid name conflicts when you want to name your prefab the same thing as an imported
component.

```jsx
import { Alert } from '@mui/material'

// Will be named `Alert` in MightyMeld studio
export const _Alert = () => <Alert severity="warning">Alert</Alert>
```

Underscores within component names will be displayed as spaces:

```jsx
import { Alert, AlertTitle } from '@mui/material'

// Will be named `Alert with title` in MightyMeld studio
export const _Alert_with_title = () => (
	<Alert severity="warning">
		<AlertTitle>Title</AlertTitle>
		Description
	</Alert>
)
```

See [MightyMeld Documentation](https://docs.mightymeld.com/docs/setup/additional/prefabs) for instructions on adding prefabs to your MightyMeld project.
