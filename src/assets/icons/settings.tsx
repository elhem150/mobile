import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Settings = ({ ...props }: SvgProps) => {
  const color = colors.blue;
  return (
    <Svg className="h-6 w-6" fill="none" {...props}>
      <Path
        fill={color}
        stroke={color}
        strokeWidth={0.2}
        d="M13.95 10.93v-.005c-.073-1.595-1.469-2.895-3.083-2.895-1.695 0-2.942 1.38-2.942 3.04 0 1.673 1.402 2.9 3.084 2.9 1.62 0 2.941-1.377 2.941-2.97v-.07Zm-.981.134v.006c0 1.125-1.011 2-2.173 2-1.146 0-2.032-.998-2.032-2.14 0-1.125 1.011-2 2.174-2 1.152 0 2.099.934 2.03 2.134Zm4.014.643-.002-.002a1.047 1.047 0 0 1-.001-1.338l.992-1.048.01-.01.007-.014.002-.004c.034-.067.074-.146.094-.226a.389.389 0 0 0-.025-.28l-.003-.005-1.49-2.588a.408.408 0 0 0-.2-.193.338.338 0 0 0-.275.005l-1.409.278h-.004c-.511.127-1.033-.186-1.232-.705l-.425-1.328-.004-.013-.009-.012c-.154-.23-.324-.324-.508-.324H9.446A.491.491 0 0 0 9 4.165l-.004.008-.002.008-.425 1.394c-.198.45-.72.764-1.232.638l-.004-.001-1.42-.28-.01-.002h-.01a.492.492 0 0 0-.443.262L3.96 8.709l-.004.006a.46.46 0 0 0-.054.268c.012.096.06.185.143.267l.992 1.047c.321.382.321.955-.001 1.337l-.994 1.12-.009.01-.005.01-.003.005c-.034.067-.074.146-.094.226a.389.389 0 0 0 .025.28l.004.006 1.49 2.517a.408.408 0 0 0 .2.193.338.338 0 0 0 .274-.005l1.409-.278h.004c.511-.127 1.033.186 1.232.704l.425 1.397.002.009.004.007c.091.179.271.265.445.265h2.983a.492.492 0 0 0 .445-.265l.003-.007.003-.008.425-1.327c.195-.508.712-.768 1.24-.704l1.417.28.01.001h.01c.17 0 .336-.081.425-.169l.01-.01.006-.011 1.492-2.59.003-.005a.46.46 0 0 0 .054-.268.455.455 0 0 0-.14-.264l-.85-1.046ZM5.613 9.673l-.001-.001-.73-.785 1.203-1.976 1.067.197c.974.22 1.945-.369 2.246-1.254l.4-1.054h2.345l.333 1.05c.3.962 1.276 1.477 2.246 1.258l1.138-.198 1.206 1.98-.733.854a1.904 1.904 0 0 0 0 2.582l.732.853-1.203 1.91-1.068-.197c-.974-.22-1.945.369-2.246 1.254l-.4 1.054H9.802l-.333-1.05c-.3-.962-1.276-1.477-2.246-1.258l-1.138.198-1.206-1.98.733-.854a1.904 1.904 0 0 0 0-2.583Z"
      />
    </Svg>
  );
};
