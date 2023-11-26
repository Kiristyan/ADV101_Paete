import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    justifyContent: 'center',
  },
  input: {
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 25,
    marginBottom: 5,
  },
  inputGroup: {
    marginBottom: 25,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#F5772B',
    marginHorizontal: 23,
    marginTop: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  greyButton: {
    backgroundColor: '#999999',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  orangeText: {
    color: '#F5772B',
  },
  backgroundImage: {
    flex: 1,
  },
  centerAlign: {
    paddingLeft: 30,
  },
  orText: {
    color:'#fff',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 85,
    marginLeft: 100,
  },
  logo: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  bottomLink: {
    flex: 1,
  },
  bottomText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

  passwordPolicyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 17,
    marginTop: 15,
  },

});

export default style;