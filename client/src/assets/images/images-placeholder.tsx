import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ImagePlaceholder = () => (
  <Svg
    data-name="Layer 1"
    viewBox="0 0 100 100"
  >
    <G data-name="Group">
      <Path
        data-name="Compound Path"
        d="M82.1 17.6H17.9a9 9 0 0 0-9 9v46.8a9 9 0 0 0 9 9h64.2a9 9 0 0 0 9-9V26.6a9 9 0 0 0-9-9ZM10.9 73.9l18.6-16a3 3 0 0 1 3.7-.2l14.6 10.2-13.4 12.5H17.9a7 7 0 0 1-7-6.5Zm71.2 6.5H37.4l24.2-22.6a3 3 0 0 1 3.5-.4l24 13.1v2.9a7 7 0 0 1-7 7Zm7-12.2L66 55.6a5 5 0 0 0-5.8.7L49.3 66.5 34.3 56a5 5 0 0 0-6.1.3l-17.3 15V26.6a7 7 0 0 1 7-7h64.2a7 7 0 0 1 7 7Z"
      />
      <Path
        data-name="Compound Path"
        d="M46.4 27.9A11.7 11.7 0 1 0 58 39.6a11.7 11.7 0 0 0-11.6-11.7Zm0 21.4a9.7 9.7 0 1 1 9.6-9.7 9.7 9.7 0 0 1-9.6 9.7Z"
      />
    </G>
  </Svg>
)

export default ImagePlaceholder