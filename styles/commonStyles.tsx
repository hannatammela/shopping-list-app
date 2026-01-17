import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FAF3E6', // lämmin beige
    alignItems: 'center',        // keskitys vaakasuunnassa
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '90%',             // siisti leveys
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 12,
    padding: 12,
    fontSize: 18,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '90%',             // saman levyinen kuin inputit
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButton: {
    backgroundColor: '#334216', // vanha vihreä
    borderColor: '#334216',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default commonStyles;
