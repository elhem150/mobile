import * as React from "react";
import { useColorScheme } from 'react-native';
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
import type { SvgProps } from 'react-native-svg';

const HouseImage = ({ ...props }: SvgProps) => {
  const colorScheme = useColorScheme();
  const fillColor = colorScheme === 'dark' ? '#FFFFFF' : '#344054';

  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={47}
    height={44}
    fill="none"
    {...props}
>
  <G fill={fillColor} clipPath="url(#a)">
    <Path d="M42.197 21.042v21.633c.648 0 1.278.003 1.908 0 .478-.004 1.007-.023 1.01.633 0 .65-.527.65-1.007.65-7.809.014-15.62.03-23.43.038a6505.7 6505.7 0 0 1-13.105 0c-1.588-.001-3.176-.026-4.763-.036-.478-.004-.935-.07-.923-.67.01-.561.443-.622.9-.617.657.009 1.313.002 2.009.002V21.09c-.154.082-.3.155-.44.236-1.343.776-2.954.457-3.824-.76-.884-1.236-.642-2.877.609-3.857 4.39-3.444 8.792-6.876 13.19-10.311 2.407-1.88 4.814-3.76 7.223-5.636 1.313-1.023 2.598-1.018 3.916.01 3.103 2.418 6.202 4.838 9.45 7.373V5.99c0-1.15.093-1.242 1.233-1.243 1.655 0 3.309-.004 4.964 0 .891.001 1.046.156 1.046 1.027.002 2.49.013 4.98-.008 7.47-.004.418.132.676.464.924 1.002.75 1.98 1.534 2.966 2.306 1.5 1.177 1.841 2.78.876 4.113-.953 1.317-2.55 1.513-4.262.452l-.002.003ZM31.866 34.745c.277.016.49.035.706.037 1.124.003 2.25 0 3.374.001.953.004 1.07.121 1.071 1.058.002.95 0 1.901 0 2.854h3.805V20.33H16.505v2.602c1.355 0 2.656-.002 3.955 0 .967.001 1.12.15 1.124 1.092.004.931 0 1.861 0 2.864 1.101 0 2.11.004 3.119 0 2.202-.007 2.018-.134 2.017 1.963v1.988c1.475 0 2.84-.006 4.203.001.782.006.934.16.94.921.006.977 0 1.954 0 2.984h.003ZM1.066 18.96c.405.509.664 1 1.067 1.3.494.368 1.1.286 1.607-.082.64-.464 1.253-.961 1.876-1.446 5.764-4.503 11.53-9.005 17.286-13.519.449-.352.787-.327 1.223.014a10921.57 10921.57 0 0 0 18.898 14.77c.205.16.434.312.677.393.703.235 1.46-.08 1.808-.718.365-.667.23-1.416-.422-1.936-1.34-1.068-2.706-2.103-4.056-3.157L24.733 1.83c-.95-.742-1.508-.731-2.477.021-2.114 1.646-4.226 3.297-6.339 4.945C11.311 10.393 6.7 13.981 2.111 17.6c-.398.313-.638.823-1.043 1.362l-.001-.002ZM24.215 6.953V18.65l6.921-6.291-6.921-5.407Zm-1.407 11.706V6.946l-6.935 5.415 6.935 6.298Zm-7.97-5.492-7.382 5.767h13.73l-6.348-5.767Zm17.332 0-6.353 5.774h13.74l-7.387-5.774ZM26.801 38.65h8.875v-2.523h-8.875v2.523ZM15.125 20.333H6.188v2.525h8.937v-2.525Zm-3.755 3.913V26.8h8.87v-2.553h-8.87Zm14.026 3.984h-8.873v2.53h8.873v-2.53Zm-5.174 11.864h-8.858v2.475h8.858v-2.475Zm20.572 2.495v-2.525h-8.856v2.525h8.856Zm-25.68-14.352H6.19v2.493h8.924v-2.493Zm-8.931 10.41H15.1v-2.482H6.183v2.483Zm15.472 3.938h8.832v-2.49h-8.832v2.49Zm3.704-6.425h-8.833v2.491h8.833v-2.492Zm10.862-30.1c0 .602.07 1.175-.014 1.725-.155 1.034.254 1.69 1.108 2.269 1.188.809 2.286 1.749 3.491 2.685V6.06h-4.585Zm-5.686 26.115h-8.86v2.519h8.86v-2.52Zm-19.167.01v2.512h8.845v-2.512h-8.845Zm-1.393-7.9H6.197v2.51h3.778v-2.51ZM6.18 42.587h3.779v-2.492H6.179v2.492Zm.023-10.399v2.515h3.756v-2.515H6.202ZM4.523 6.758h1.846c.413.002.751.218.676.608-.05.254-.41.623-.646.636-1.294.06-2.591.04-3.888.019-.404-.007-.717-.275-.605-.674.067-.237.398-.534.642-.562.65-.079 1.315-.027 1.975-.028v.002Z" />
    <Path d="M45.017 33.137c-.175 0-.396.067-.516-.014-.238-.159-.586-.4-.582-.605.002-.216.325-.527.574-.613.312-.107.691-.044 1.039-.025.406.023.665.237.648.659-.018.422-.295.6-.703.602h-.459v-.005l-.001.001Z" />
  </G>
  <Defs>
    <ClipPath id="a">
      <Path fill="#fff" d="M0 0h47v44H0z" />
    </ClipPath>
  </Defs>
</Svg>
);};
export default HouseImage
