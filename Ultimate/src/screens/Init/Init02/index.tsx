import React, { memo, useCallback, useState } from 'react';
import { Image, ImageRequireSource, TextInput, View } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
  Select,
  SelectItem,
  IndexPath,
  Button,
  CheckBox,
} from '@ui-kitten/components';
// ----------------------------- Assets -----------------------------------
import { Icons } from 'assets/icons';
import { Images } from 'assets/images';
// ----------------------------- Hook -----------------------------------
import { useLayout } from 'hooks';
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from '@react-navigation/native';
// ----------------------------- Components & Elements -----------------------------------
import {
  NavigationAction,
  Container,
  Content,
  Text,
  LinearGradientText,
  VStack,
  HStack,
} from 'components';
import axios from 'axios';

const init02 = memo(() => {
  const { navigate, goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const [ages, setAges] = useState<number>();
  const [userHeight, setUserHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [isAgreed, setIsAgreed] = useState(false);
  const data_select = [{ title: 'Student' }, { title: 'Teacher' }];
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
  const URL = 'http://api.dontthinkpill.com/';

  const OnNext = useCallback(async () => {
    try {
      // console.log({ ages, gender, userHeight, weight });
      // const res = await axios.get(URL + 'auth/all');
      // console.log(res.data);
    } catch (e) {
      console.log(e);
    }
    navigate('SignIn');
  }, [ages, gender, userHeight, weight]);

  const GenderSelect = ({
    data,
    selected,
    onPress,
  }: {
    onPress?(): void;
    selected: boolean;
    data: { img: ImageRequireSource; title: string };
  }) => {
    return (
      <VStack onPress={onPress} ph={16}>
        <VStack
          style={[
            styles.imgGender,
            selected && { borderColor: theme['background-basic-color-11'] },
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
        <LinearGradientText text={<Text category="h2">{'Welcome to the journey!'}</Text>} />
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
        <View>
          <Text category="h3">이름</Text>
          <TextInput
            style={styles.inputbox}
            keyboardType="default"
            onChangeText={(text) => {
              setName(text);
            }}
            placeholder="이름을 입력하세요"
            placeholderTextColor="#FFFFFF"
          />
        </View>
        <HStack>
          <View>
            <Text category="h3">나이</Text>
            <TextInput
              style={styles.inputbox}
              keyboardType="number-pad"
              onChangeText={(text) => {
                setAges(text);
              }}
              placeholder="나이를 입력하세요"
              placeholderTextColor="#FFFFFF"
            />
          </View>
          <View>
            <Text category="h3">키</Text>
            <TextInput
              style={styles.inputbox}
              keyboardType="number-pad"
              onChangeText={(text) => {
                setUserHeight(text);
              }}
              placeholder="키를 입력하세요"
              placeholderTextColor="#FFFFFF"
            />
          </View>
        </HStack>
        <View>
          <Text category="h3">몸무게</Text>
          <TextInput
            style={styles.inputbox}
            keyboardType="number-pad"
            onChangeText={(text) => {
              setWeight(text);
            }}
            placeholder="몸무게를 입력하세요"
            placeholderTextColor="#FFFFFF"
          />
        </View>
        <CheckBox
          checked={isAgreed}
          onChange={e => setIsAgreed(e)}
        >By signing in, you agree with the <Text style={{ textDecorationLine: 'underline' }} >GCU</Text></CheckBox>
      <Button children="완료" style={styles.button} onPress={OnNext} />
      </Content>
    </Container>
  );
});

export default init02;

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
  inputbox: {
    // borderColor: '#7a42f4',
    margin: 15,
    height: 40,
    // backgroundColor: 'background-basic-color-10',
    borderBottomColor: '#FFFFFF',
    borderTopColor: '#152232',
    borderRightColor: '#152232',
    borderLeftColor: '#152232',
    // marginLeft: 20,
    // marginBottom: 7,
    borderWidth: 2,
    borderRadius: 5,
    color: '#FFFFFF',
  },
});
