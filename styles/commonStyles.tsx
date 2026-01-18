import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FAF3E6',
    alignItems: 'center',
  },
  title: {
    fontSize: 52,
    fontFamily: 'DancingScript',
    color: '#334216',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 60,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 12,
    padding: 12,
    fontSize: 18,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '90%',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334216',
    backgroundColor: '#334216',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    position: 'absolute',
    bottom: 40,
    left: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#334216',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default commonStyles;
