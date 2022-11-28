import Stack from "../components/Stack";

export default {
    title: 'Design System/Atoms/Stack',
    component: Stack,
    argTypes: {
        numberOfChildren: {
            type: "number",
            defaultValue: 4
        },
    },
}

export const Primary = () => {
    return (
        <Stack>
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "blue",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                1
            </div>
        </Stack>
    )
}

// Create Template
const Template = ({ numberOfChildren, ...args }) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map(n => (
            <div
                key={n}
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "blue",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {n + 1}
            </div>
        ))}
    </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false,
}
