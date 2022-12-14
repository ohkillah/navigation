import React from 'react';
import {Button, Divider, Icon, Layout, StyleService} from '@ui-kitten/components';
import useStore from "../../store/useStore";
import {useNavigation} from "@react-navigation/native";


export const LoginScreen = () => {
  const login = useStore(state => state.login)
  const navigation = useNavigation();

  const navigateRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Layout style={{flex: 1}}>
      <Divider/>
      <Layout style={styles.layout}>
        <Button status='info' onPress={login}>Login</Button>
        <Button style={styles.button} onPress={navigateRegister} appearance='ghost'>Register</Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleService.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e293b'
  },
  button: {
    marginTop: 5
  }
});
