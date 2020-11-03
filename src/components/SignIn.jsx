import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  textInput: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#aaa',
  },
  textInputError: {
    borderColor: '#d73a4a'
  },
  submitBtn: {
    margin: 5,
    padding: 10
  },
  error: {
    color: '#d73a4a'
  }
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('username is required.'),
  password: yup
    .string()
    .min(6, 'password must have at least 6 character.')
    .required('password is required.')
})

const onSubmit = values => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
    {({ values, errors, touched, handleSubmit, handleChange }) => {
      return (
        <View style={styles.container}>
          <TextInput
            style={[styles.textInput].concat((errors.username && touched.username) ? styles.textInputError : {})}
            placeholder='username'
            value={values.username}
            onChangeText={handleChange('username')}
          />
          {errors.username && touched.username && <Text style={styles.error}>{errors.username}</Text>}
          <TextInput
            style={[styles.textInput].concat((errors.password && touched.password) ? styles.textInputError : {})}
            placeholder='password'
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry={true}
          />
          {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
          <Button style={styles.submitBtn} title='Sign in' onPress={handleSubmit}/>
        </View>
      );
    }}
    </Formik>
  );
};

export default SignIn;
