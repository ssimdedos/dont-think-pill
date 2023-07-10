import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import { StyleService, TopNavigation, useStyleSheet } from '@ui-kitten/components';
import { Images } from 'assets/images';
import axios from 'axios';
import { Container, LinearGradientText, Text, VStack } from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';
import { useLayout } from 'hooks';
import React, { memo, useCallback, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { LoginAction } from 'reduxs/actions';
// import { useAppDispatch } from 'reduxs/store';

const SignIn = memo(() => {
  const URL = 'http://api.dontthinkpill.com/';
  const { navigate, goBack } = useNavigation();
  const { height, width } = useLayout();
  const dispatch = useDispatch();
  const styles = useStyleSheet(themedStyles);

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onSignIn = useCallback(async () => {
    // const res = await axios.get(URL + 'auth/all');
    // console.log(res.data);
    // console.log(name);
    dispatch(LoginAction({ name }));
    navigate('Main');
  }, [name, password]);
  const onNext = useCallback(() => {}, []);
  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={<Text onPress={goBack}>x</Text>}
      />
      <LinearGradientText text={<Text category="header">{'로그인'}</Text>} />
      <VStack>
        <View>
          <Text category="h3">사용자명</Text>
          <TextInput
            style={styles.inputbox}
            keyboardType="default"
            onChangeText={(text) => {
              setName(text);
            }}
            placeholder="사용자명을 입력하세요"
          />
        </View>
        {/* <View>
          <Text category="h3">패스워드</Text>
          <TextInput
            style={styles.inputbox}
            keyboardType="number-pad"
            onChangeText={(text) => {}}
            placeholder="비밀번호를 입력하세요"
          />
        </View> */}
        <Button children="로그인" style={styles.button} onPress={onSignIn} />
      </VStack>
    </Container>
  );
});

export default SignIn;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  button: {
    marginHorizontal: 120,
    marginBottom: 12,
  },
  inputbox: {
    borderColor: '#7a42f4',
    margin: 15,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'background-basic-color-10',
  },
});
