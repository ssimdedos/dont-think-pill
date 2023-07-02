import { useNavigation } from '@react-navigation/native';
import { StyleService, TopNavigation, useStyleSheet } from '@ui-kitten/components';
import { Images } from 'assets/images';
import { Container, LinearGradientText, Text } from 'components';
import ThemeLogo from 'elements/App/ThemeLogo';
import { useLayout } from 'hooks';
import React, { memo, useCallback, useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { loginAction } from 'reduxs/actions';

const SignIn = memo(() => {
  const { navigate, goBack } = useNavigation();
  const { height, width } = useLayout();
  const dispatch = useDispatch();
  const styles = useStyleSheet(themedStyles);

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onSignIn = useCallback(() => {
    dispatch(loginAction({ email, name, password }));
  }, [email, name, password]);
  const goSignUp = useCallback(() => navigate('Init02'), []);

  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={<Text onPress={goBack}>x</Text>}
      />
      <LinearGradientText text={<Text category="header">{'로그인'}</Text>} />
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
});
