import { StyleSheet } from 'react-native';

export const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
 
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
superCircle: {
  width: '98%',
  aspectRatio: 1,
  borderRadius: 9999,
  backgroundColor: '#334216',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  marginTop: 70,
  marginBottom: 80,
  position: 'relative', // absolute-elementit sijoittuvat tämän sisään
},

superHole: {
  width: '96%',      // ohut rengas → säädä arvoa
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
  top: '30%',       // keskitetty ontossa renkaassa
},

shoppingbagIcon: {
  position: 'absolute',
  bottom: 80,       // sijoitetaan alaosaan pallon sisällä
  alignSelf: 'center',
  fontSize: 65,
  color: '#334216',
},

})

export default defaultStyle;
