import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.qi.app',
  appName: 'qi',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
}

export default config
