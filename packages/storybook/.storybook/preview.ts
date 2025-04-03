import type { Preview } from '@storybook/react'
import '../src/styles/globals.css'
import '../src/styles/theme.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Design System', 'Components'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
