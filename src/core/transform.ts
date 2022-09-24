import MagicString from 'magic-string'
import { getTransformResult } from './common'
import type { UserOptions } from './../types'

export function transform(_source: string, id: string, options: UserOptions) {
  const { enabled = true, config = {} } = options
  const s = new MagicString(_source)
  if (!enabled) {
    return getTransformResult(s, id)
  }

  const vConsoleImportDeclearation = `
    import VConsole from 'vconsole';
    
    new VConsole(${JSON.stringify(config)});
    `

  s.prepend(vConsoleImportDeclearation)

  return getTransformResult(s, id)
}
