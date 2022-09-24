export interface UserOptions {
  entry: string[] | string // entry file
  enabled?: boolean // enabled
  config?: voption // vconsole option
}

export interface voption {
  defaultPlugins?: string[]
  onReady?: () => void
  onClearLog?: () => void
  maxLogNumber?: number
  disableLogScrolling?: boolean
  theme?: 'light' | 'dark'
}
