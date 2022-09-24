import type MagicString from 'magic-string'

export const getTransformResult = (
  s: MagicString,
  id: string,
): { code: string; map: any } => {
  return {
    code: s.toString(),
    get map(): any {
      return s.generateMap({
        source: id,
        includeContent: true,
        hires: true,
      })
    },
  }
}
