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
        <View>
        <LinearGradientText text={<Text category="header">{'DON\'T THINK PILL'}</Text>} />
        <Text category="h5"> Don't think</Text>
        <Text category="h5"> Here's your pill</Text>
        </View>
      <VStack>
        <View style={styles.inputView} >
          <Text style={{ marginTop: 20, marginLeft: 20 }}  category='h4' >Please choose a username</Text>
          <TextInput
            style={styles.inputbox}
            keyboardType="default"
            onChangeText={(text) => {
              setName(text);
            }}
            placeholder="사용자명을 입력하세요"
            placeholderTextColor ='#FFFFFF'
          />
        <Button children="로그인" style={styles.button} onPress={onSignIn} />
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
    height: 30,
    backgroundColor: '#6E5CFC',
    borderColor: '#6E5CFC',
  },
  
  inputbox: {
    borderBottomColor: '#7a42f4',
    borderTopColor: 'background-basic-color-3',
    borderRightColor: 'background-basic-color-3',
    borderLeftColor: 'background-basic-color-3',
    marginLeft: 20,
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    color: '#FFFFFF',
    // backgroundColor: 'background-basic-color-10',
  },
  inputView: {
    backgroundColor: 'background-basic-color-3',
    height: 150,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    margin: 10,
    marginTop: 70
  },
  
});
