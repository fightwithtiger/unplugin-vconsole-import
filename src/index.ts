import { createUnplugin } from 'unplugin'
import { transform } from './core'
import type { UserOptions } from './types'

export default createUnplugin((options: UserOptions) => {
  const { entry } = options
  let entryPath = Array.isArray(entry) ? entry : [entry]
  if (process.platform === 'win32') {
    entryPath = entryPath.map(item => item.replace(/\\/g, '/'))
  }

  return {
    name: 'unplugin-vconsole-import',
    transformInclude(id) {
      return entryPath.includes(id)
    },
    transform(code, id) {
      return transform(code, id, options)
    },
  }
})
