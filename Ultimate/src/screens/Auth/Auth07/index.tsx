import React, {memo} from 'react';
import {Image, ImageRequireSource} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { TopNavigation, useTheme, StyleService, useStyleSheet, Select, SelectItem, IndexPath, Button } from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import {Icons} from 'assets/icons';
import {Images} from 'assets/images';
// ----------------------------- Hook -----------------------------------
import {useLayout} from 'hooks';
// ----------------------------- Navigation -----------------------------------
import {useNavigation} from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import { NavigationAction, Container, Content, Text, LinearGradientText, VStack, HStack } from 'components';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Auth07 = memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const [gender, setGender] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [ages, setAges] = React.useState([24, 32]);
  const data_select = [{title: 'Student'}, {title: 'Teacher'}];
  const displayValue = data_select[selectedIndex.row].title;
  const data = [
    {
      img: Images.avatar.male,
      title: 'Male',
    },
    {
      img: Images.avatar.female,
      title: 'Female',
    },
    {
      img: Icons.smiley,
      title: 'Other',
    },
  ];
  const GenderSelect = ({
    data,
    selected,
    onPress,
  }: {
    onPress?(): void;
    selected: boolean;
    data: {img: ImageRequireSource; title: string};
  }) => {
    return (
      <VStack onPress={onPress} ph={16}>
        <VStack
          style={[
            styles.imgGender,
            selected && {borderColor: theme['background-basic-color-11']},
          ]}>
          <Image source={data.img} />
        </VStack>
        <Text category="subhead" marginTop={8} center>
          {data.title}
        </Text>
      </VStack>
    );
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<NavigationAction />}
        accessoryRight={
          <Text category="h5" status="warning">
            Skip
          </Text>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <LinearGradientText
          text={<Text category="giant">{'Update Infomation'}</Text>}
        />
        <Text marginBottom={24} marginTop={40} category="h3">
          Gender
        </Text>
        <HStack mb={32}>
          {data.map((item, i) => {
            const selected = item.title === gender;
            return (
              <GenderSelect
                key={i}
                data={item}
                onPress={() => {
                  setGender(item.title);
                }}
                selected={selected}
              />
            );
          })}
        </HStack>
        <HStack>
          <Text category="h3">Age</Text>
          <Text category="h6" status='warning'>
            {ages[0]} - {ages[1]}
          </Text>
        </HStack>
        <MultiSlider
          trackStyle={styles.trackStyle}
          min={16}
          sliderLength={width - 32}
          max={65}
          values={ages}
          onValuesChange={e => setAges(e)}
        />
        <HStack mt={4}>
          <Text category="footnote" status="placeholder">
            {16}
          </Text>
          <Text category="footnote" status="placeholder">
            {36}
          </Text>
        </HStack>
        <VStack rowGap={24} mt={32}>
          <Text category="h3">Occupation</Text>
          <Select
            selectedIndex={selectedIndex}
            value={displayValue}
            //@ts-ignore
            onSelect={index => setSelectedIndex(index)}>
            {data_select.map((item, i) => {
              return <SelectItem title={item.title} key={i} />;
            })}
          </Select>
        </VStack>
      </Content>
      <Button children="Create Account" style={styles.button} onPress={goBack} />
    </Container>
  );
});

export default Auth07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 16,
  },
  imgGender: {
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'background-basic-color-2',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 16,
  },
  trackStyle: {
    backgroundColor: 'background-basic-color-2',
    height: 4,
  },
  button: {
    marginHorizontal: 16,
  },
});
