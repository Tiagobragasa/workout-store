import type { ToggleProps } from '.'
import Toggle from '.'

export default {
  component: Toggle,
  title: 'Atoms/Toggle',
  argTypes: {
    variant: {
      name: 'variant',
      defaultValue: 'horizontal',
    },
    displayLabel: {
      defaultValue: true,
    },
  },
}

const Template = ({ ...args }: ToggleProps) => <Toggle {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'toggle',
  label: 'Label',
}
