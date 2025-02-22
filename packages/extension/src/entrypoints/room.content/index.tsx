import { defineContentScript } from 'wxt/sandbox'
import { createIntegratedUi } from 'wxt/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { logger } from '@/utils/logger'

import App from './App'

export default defineContentScript({
  matches: [`${import.meta.env.WXT_PARTYKIT_HOST}/room/*`],
  main: (ctx) => {
    logger.log('room.js')

    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: '#root',
      onMount: (container) => {
        const root = createRoot(container)

        root.render(
          <StrictMode>
            <App />
          </StrictMode>
        )

        return root
      },
    })

    ui.mount()
  },
})
