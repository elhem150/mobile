import React from 'react';
import { StyleSheet, ViewStyle, StyleProp } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@/shared/components';

type GradientBackgroundProps = {
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  colors?: string[];
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export const GradientBackground = ({
  start = { x: 0, y: 1 },
  end = { x: 0, y: 0 },
  colors: gradientColors = [colors.background, colors['light-blue']],
  style,
  children,
  ...props
}: GradientBackgroundProps) => {
  return (
    <LinearGradient
      start={start}
      end={end}
      colors={gradientColors}
      style={[styles.gradient, style]}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
