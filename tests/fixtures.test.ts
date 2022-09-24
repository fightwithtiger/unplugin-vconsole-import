import { resolve } from 'path'
import { promises as fs } from 'fs'
import { describe, expect, test } from 'vitest'
import fg from 'fast-glob'
import { transform } from '../src/core'

describe('fixtures', async () => {
  const root = resolve(__dirname, 'fixtures')
  const files = await fg('*', {
    cwd: root,
    onlyFiles: true,
  })

  for (const id of files) {
    test(id, async () => {
      const code = await fs.readFile(resolve(root, id), 'utf-8')
      const exec = () => transform(code, id, { entry: id, config: { theme: 'light' } })?.code
      if (id.includes('error')) {
        expect(exec).toThrowErrorMatchingSnapshot()
      }
      else {
        expect(exec()).toMatchSnapshot()
      }
    })
  }
})
