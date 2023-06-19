import React, {memo} from 'react';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet, Spinner} from '@ui-kitten/components';
import Container from './Container';

const LoadingScreen = memo(() => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <Spinner size="large"/>
    </Container>
  );
});

export default LoadingScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
