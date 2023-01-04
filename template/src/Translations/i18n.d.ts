import * as resources from './Resources'
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'vi'
    resources: {
      vi: typeof resources.vi
      en: typeof resources.en
      es: typeof resources.es
      //[generate_here] <--Do not remove this comment. Used for auto-generation
    }
  }
}
