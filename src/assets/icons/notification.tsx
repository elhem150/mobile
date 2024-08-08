import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import colors from '@/theme/colors';

export const Notification = ({ color = colors.blue, ...props }: SvgProps) => {
  return (
    <Svg className="h-4 w-4" fill="none" {...props}>
      <Path
        fill={color}
        d="M6.58 0a5.24 5.24 0 0 1 5.239 4.837l.012.2.004.204-.001 3.248.81 2.007c.02.048.035.099.046.15l.013.078.008.119a.9.9 0 0 1-.656.87l-.102.024-.117.01-3.065-.002-.005.146C8.692 13.07 7.743 14 6.583 14s-2.11-.932-2.184-2.11l-.005-.145-3.064.001a.848.848 0 0 1-.227-.031l-.11-.038c-.359-.155-.57-.532-.526-.95l.018-.116.037-.115.808-2.005.001-3.259.004-.203A5.233 5.233 0 0 1 6.581 0Zm1.315 11.745H5.27l.006.128c.06.644.557 1.156 1.18 1.218l.127.006c.682 0 1.243-.538 1.307-1.224l.005-.127ZM6.581.903c-2.296 0-4.176 1.738-4.36 3.96l-.011.193-.003.185v3.34l-.034.173-.843 2.089 10.466.002.04-.002-.843-2.089-.034-.173V5.25l-.003-.184C10.864 2.74 8.942.903 6.58.903Z"
      />
    </Svg>
  );
};
