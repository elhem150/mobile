import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path, Rect } from 'react-native-svg';
export const Upload = ({ ...props }: SvgProps) => (
  <Svg className="h-9 w-9" fill="none" {...props}>
    <Rect width={31} height={31} fill={'#08D3BB'} rx={15.5} />
    <Path
      fill="#fff"
      d="M14.294 17.754c.671.63 1.76.631 2.431 0l1.841-1.728a.516.516 0 0 0-.04-.76.601.601 0 0 0-.77 0l-1.677 1.576.004-8.304c0-.297-.256-.538-.573-.538-.316 0-.573.241-.573.538l-.005 8.293-1.668-1.565a.6.6 0 0 0-.81 0 .515.515 0 0 0 0 .762l1.84 1.726Z"
    />
    <Path
      fill="#fff"
      d="M22.375 18.227c-.345 0-.625.267-.625.597v2.386c0 .33-.28.597-.625.597H9.875a.611.611 0 0 1-.625-.597v-2.386c0-.33-.28-.597-.625-.597a.611.611 0 0 0-.625.597v2.386C8 22.2 8.84 23 9.875 23h11.25C22.16 23 23 22.199 23 21.21v-2.386c0-.33-.28-.597-.625-.597Z"
    />
    <Path
      stroke="#fff"
      strokeWidth={0.5}
      d="M14.294 17.754c.671.63 1.76.631 2.431 0l1.841-1.728a.516.516 0 0 0-.04-.76.601.601 0 0 0-.77 0l-1.677 1.576.004-8.304c0-.297-.256-.538-.573-.538-.316 0-.573.241-.573.538l-.005 8.293-1.668-1.565a.6.6 0 0 0-.81 0 .515.515 0 0 0 0 .762l1.84 1.726Z"
    />
    <Path
      stroke="#fff"
      strokeWidth={0.5}
      d="M22.375 18.227c-.345 0-.625.267-.625.597v2.386c0 .33-.28.597-.625.597H9.875a.611.611 0 0 1-.625-.597v-2.386c0-.33-.28-.597-.625-.597a.611.611 0 0 0-.625.597v2.386C8 22.2 8.84 23 9.875 23h11.25C22.16 23 23 22.199 23 21.21v-2.386c0-.33-.28-.597-.625-.597Z"
    />
  </Svg>
);
