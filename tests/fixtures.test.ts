import { describe, expect, test } from 'vitest'
import { transform } from '../src/core'

describe('fixtures', async () => {
  const files = import.meta.glob('./fixtures/**/*.{vue,js,ts}', {
    eager: true,
    as: 'raw',
  })

  for (const [id, code] of Object.entries(files)) {
    test(id.replace(/\\/g, '/'), () => {
      const exec = () => transform(code, id, { entry: id, config: { theme: 'dark' } })?.code
      if (id.includes('error')) {
        expect(exec).toThrowErrorMatchingSnapshot()
      }
      else {
        expect(exec()).toMatchSnapshot()
      }
    })
  }
})
