import * as React from 'react';
import { LayoutProps, TextProps } from '@ui-kitten/components';
import { EvaStatus } from '@ui-kitten/components/devsupport';
import { SharedValue } from 'react-native-reanimated';
import {
  GestureResponderEvent,
  ScrollViewProps,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native/types';
import { NameIcon } from './iconpack-name';
export interface AnimatedBottomViewProps {
  progress: SharedValue<number>;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  useSafeArea?: boolean;
}

export interface ContainerProps extends LayoutProps {
  useSafeArea?: boolean;
}
export interface ContentProps extends ScrollViewProps {
  padder?: boolean;
  level?: '1' | '2' | '3' | '4' | '5';
}
export interface NavigationActionProps {
  icon?: NameIcon;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  borderRadius?: number;
  borderWidth?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  onPress?: () => void;
  title?: string;
  titleStatus?: EvaStatus | 'placeholder' | 'white';
  size?: 'giant' | 'large' | 'medium' | 'small'; // giant-58-icon-24 large-48-icon-24  medium-40-icon-24  small-32-icon-16
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  center?: boolean;
  status?: 'basic' | 'white' | 'primary' | 'warning' | 'placeholder' | 'warning-fill';
}

export interface ILayoutCustomProps extends ViewProps {
  padder?: boolean;
  mt?: number;
  style?: StyleProp<ViewStyle>;
  mb?: number;
  mh?: number;
  mv?: number;
  ml?: number;
  mr?: number;
  ph?: number;
  pt?: number;
  pl?: number;
  pv?: number;
  pb?: number;
  maxWidth?: number;
  minWidth?: number;
  padding?: number;
  border?: number;
  margin?: number;
  opacity?: number;
  alignSelfCenter?: boolean;
  itemsCenter?: boolean;
  wrap?: boolean;
  columnGap?: number;
  gap?: number;
  borderStyle?: 'solid' | 'dotted' | 'dashed' | undefined;
  rowGap?: number;
  overflow?: 'visible' | 'hidden' | 'scroll' | undefined;
  onPress?(): void;
  disabled?: boolean;
  onLongPress?: (event: GestureResponderEvent) => void;
  level?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | string;
  justify?:
    | 'center'
    | 'space-between'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
    | undefined;
}
export interface HStackProps extends ILayoutCustomProps {}
export interface VStackProps extends ILayoutCustomProps {}

export interface ProgressBarProps {
  style?: StyleProp<ViewStyle>;
  progress: number;
  styleBar?: StyleProp<ViewStyle>;
  progressColor?: string;
  containColor?: string;
}

export type TextSizeCategory =
  | 'header0'
  | 'header1'
  | 'header2'
  | 'header3'
  | 'header4'
  | 'header5'
  | 'header6'
  | 'body'
  | 'subhead'
  | 'footnote'
  | 'c1'
  | 'c2'
  | 's1'
  | 's2'
  | 'p1'
  | 'p2';

export interface ITextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  category?: TextSizeCategory;
  status?: EvaStatus | 'placeholder' | 'white';
  children?: any;
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  opacity?: number;
  maxWidth?: number;
  fontSize?: number;
  lineHeight?: number;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  none?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  underline?: boolean;
  bold?: boolean;
  italic?: boolean;
  onPress?: () => void;
  fontWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export enum EFormat {
  LIMIT = 'LIMIT',
  DEFAULT = 'DEFAULT',
  SECURE = 'SECURE',
}

// export type {
//   ContainerProps,
//   ContentProps,
//   AnimatedBottomViewProps,
//   HStackProps,
//   NavigationActionProps,
//   ProgressBarProps,
//   TextSizeCategory,
//   // ITextProps,
//   VStackProps,
// };
