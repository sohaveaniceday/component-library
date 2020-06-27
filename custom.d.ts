declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>
  const src: string
  export default src
}
// declare module '*.svg' {
//   const src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
//   export default src
// }
