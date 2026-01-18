import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FAF3E6', // lämmin beige
    alignItems: 'center',        // keskitys vaakasuunnassa
  },
  title: {
  fontSize: 52,
  fontFamily: 'DancingScript', // Dancing Script fontti
  color: '#334216',            // sama kuin tallenna-painikkeen väri
  textAlign: 'center',
  marginTop: 20,
  marginBottom: 60,            // isompi väli tuote-kenttään
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
  backButton: {
  position: 'absolute',
  bottom: 40,
  left: 30,
  width: 60,
  height: 60,
  borderRadius: 30,         // tekee siitä täysin pyöreän
  backgroundColor: '#334216', 
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  elevation: 5,             // android-varjo
},

});

export default commonStyles;
