import { RPC } from '@mixer/postmessage-rpc'

declare global {
  interface Window {
    rpc: RPC
  }
}
