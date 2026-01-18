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
  pressedButton: {
    backgroundColor: '#4b5d2b', // tummempi vihreä, Lisää-painikkeelle
  },
  pressedBackButton: {
    backgroundColor: '#4b5d2b', // tummempi vihreä, takaisin-painikkeelle
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9e5cd', // vaalea vihreä
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    width: '100%',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#334216',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedDot: {
    width: 12,
    height: 12,
    backgroundColor: '#334216',
    borderRadius: 6,
  },
  itemText: {
    fontSize: 18,
    color: '#334216',
    marginRight: 20,
  },
  listContainer: {
    width: '90%',       // sama leveys kuin Lisää-painike
    marginTop: 50,      // pieni väli painikkeen alapuolelle
    alignSelf: 'center', // keskitetään vaakasuunnassa
  },
  deleteIcon: {
    marginLeft: 'auto',     // työntää ikonin oikeaan reunaan
    fontSize: 24,
    color: '#334216',
  },
  pressedDeleteIcon: {
    backgroundColor: '#b7d1a5', // vaalea vihreä, sopii itemBoxin väriin
    borderRadius: 5,             // pyöristys, jotta efekti on siisti
    padding: 3,
  },
  backIcon: {
  fontSize: 26,
  color: '#fff',
},


});

export default commonStyles;
