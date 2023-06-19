import React, { memo } from 'react';
import { StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { Text, TextProps } from '@ui-kitten/components';
export interface MyTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  category?:
    | 'giant'
    | 'header'
    | 'h0'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'subhead'
    | 'footnote'
    | 'c1'
    | 'c2'
    | 's1'
    | 's2'
    | 'p1'
    | 'p2';
  status?:
    | 'basic'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'control'
    | 'placeholder'
    | 'white'
    | 'black'
    | 'caption'
    | 'grey'
    | 'chambrey'
    | 'platinum';
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
export default memo(
  ({
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    marginVertical,
    marginHorizontal,
    opacity,
    uppercase,
    lowercase,
    capitalize,
    none,
    left,
    lineHeight,
    right,
    center,
    underline,
    onPress,
    italic,
    category = 'body',
    status = 'basic',
    children,
    maxWidth,
    style,
    fontWeight,
    ...rest
  }: MyTextProps) => {
    let textAlign: 'left' | 'center' | 'right' | 'auto' | 'justify' | 'left';

    left
      ? (textAlign = 'left')
      : right
      ? (textAlign = 'right')
      : center
      ? (textAlign = 'center')
      : (textAlign = 'left');

    let textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'none';

    uppercase
      ? (textTransform = 'uppercase')
      : lowercase
      ? (textTransform = 'lowercase')
      : capitalize
      ? (textTransform = 'capitalize')
      : none
      ? (textTransform = 'none')
      : (textTransform = 'none');

    let textDecorationLine: 'none' | 'underline' | 'line-through' | 'underline line-through';
    underline ? (textDecorationLine = 'underline') : (textDecorationLine = 'none');

    let fontStyle: 'normal' | 'italic';
    italic ? (fontStyle = 'italic') : (fontStyle = 'normal');

    return (
      <TouchableOpacity onPress={onPress} disabled={!onPress} activeOpacity={!onPress ? 1 : 0.54}>
        <Text
          category={category}
          status={status}
          style={[
            {
              marginLeft: marginLeft,
              margin: margin,
              marginRight: marginRight,
              marginTop: marginTop,
              marginBottom: marginBottom,
              marginVertical: marginVertical,
              marginHorizontal: marginHorizontal,
              opacity: opacity,
              textAlign: textAlign,
              maxWidth: maxWidth,
              lineHeight: lineHeight || getLineHeight(category),
              textTransform: textTransform,
              textDecorationLine: textDecorationLine,
              fontStyle: fontStyle,
              fontWeight: fontWeight,
            },
            style,
          ]}
          {...rest}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  },
);

const getLineHeight = (
  category:
    | 'giant'
    | 'header'
    | 'h0'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'subhead'
    | 'footnote'
    | 'c1'
    | 'c2'
    | 's1'
    | 's2'
    | 'p1'
    | 'p2',
): number => {
  switch (category) {
    case 'giant':
      return 60;
    case 'header':
      return 48;
    case 'h0':
      return 44;
    case 'h1':
      return 40;
    case 'h2':
      return 40;
    case 'h3':
      return 30;
    case 'h4':
      return 24;
    case 'h5':
      return 22;
    case 'h6':
      return 24;
    case 'body':
      return 24;
    case 'subhead':
      return 20;
    case 'footnote':
      return 18;
    case 'c1':
      return 16;
    case 'c2':
      return 13;
    case 's1':
      return 16;
    case 's2':
      return 13;
    case 'p1':
      return 16;
    case 'p2':
      return 13;
    default:
      return 24;
  }
};
