import Button from "../components/Button";
import {actions} from "@storybook/addon-actions";

export default {
    title: 'Button System/Atoms/Button',
    component: Button,
}

//Create primary button story
export const Primary = () => {
    return <Button label="Primary button" />
}

// const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' });

// Create Template
const Template = args => <Button {...args} />

//Creating a story for a button with controls
export const Red = Template.bind({})
Red.args = {
    color: 'white',
    backgroundColor: 'red',
    label: 'Click Me',
    disabled: false,
    radius: 'rounded',
    border: 'solid',
    borderColour: 'red',
    handleClick: e => {
        actions('onClick');
    }
}
//
// //Creating a story for a button with emoi
// export const ButtonEmoji = Template.bind({})
// ButtonEmoji.args = {
//     color: 'black',
//     label: '😀 😎 👍 💯',
//     backgroundColor: 'blue',
//     disabled: false,
//     radius: 'rounded',
//     border: 'none',
//     borderColour: 'none',
//     // handleClick: () => { action('handleClick') }
// }

// Red.parameters = {
//     a11y: {
//         config: {
//             rules: [{ id: 'color-contrast', enabled: false }],
//         },
//     },
// };