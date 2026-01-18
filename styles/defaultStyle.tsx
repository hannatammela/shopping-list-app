import { StyleSheet } from 'react-native';

export const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FAF3E6',
  },
  // button nyt sisältää kaikki ominaisuudet
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334216',
    backgroundColor: '#334216',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  bottomCircle: {
    width: '98%',
    aspectRatio: 1,
    borderRadius: 9999,
    backgroundColor: '#334216',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 80,
    position: 'relative',
  },
  topCircle: {
    width: '96%',
    aspectRatio: 1,
    borderRadius: 9999,
    backgroundColor: '#FAF3E6',
  },
  superTitle: {
    color: '#334216',
    fontSize: 52,
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: 'DancingScript',
    position: 'absolute',
    alignSelf: 'center',
    top: '30%',
  },
  shoppingbagIcon: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    fontSize: 65,
        color: '#334216',
  },
  pressedButton: {
  backgroundColor: '#4b5d2b',
},
});

export default defaultStyle;