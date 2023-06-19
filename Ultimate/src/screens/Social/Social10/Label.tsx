import React from 'react';
import { Line, G, Text } from 'react-native-svg';
import { PieChartData } from 'react-native-svg-charts';

interface LabelsProps {
  slices: {
    pieCentroid: string;
    labelCentroid: string;
    data: PieChartData;
  }[];
}

export const Labels = (props: Partial<LabelsProps>) => {
  const { slices } = props as LabelsProps;
  return (
    <>
      {slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <G key={index}>
            <Line
              x1={labelCentroid[0]}
              y1={labelCentroid[1]}
              x2={pieCentroid[0]}
              y2={pieCentroid[1]}
              strokeDasharray={[0,2,4,5,6,8]}
              stroke={data?.svg && data.svg.fill}
            />
            <G x={labelCentroid[0]} y={labelCentroid[1]}>
              <Text
                key={index}
                x={2.5}
                y={-6}
                // @ts-ignore
                fill={data.svg.fill}
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={16}
                fontWeight={'bolder'}
                opacity={'1'}
                strokeWidth={0.4}>
                {/* @ts-ignore */}
                {data.title}
              </Text>
              <Text
                key={index+"b"}
                x={0}
                y={16}
                // @ts-ignore
                fill={data.svg.fill}
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={16}
                fontWeight={'bolder'}
                opacity={'1'}
                strokeWidth={0.4}>
                {data.value}%
              </Text>
            </G>
          </G>
        );
      })}
    </>
  );
};
