import { StyleSheet } from 'react-native';

export const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FAF3E6',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  primaryButton: {
    backgroundColor: '#334216',
    borderColor: '#334216',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})

export default defaultStyle;
