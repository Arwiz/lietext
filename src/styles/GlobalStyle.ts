import { StyleSheet } from 'react-native'

export const COLORS = {
  blue_900: '#0B2447',
  blue_800: '#19376D',
  blue_700: '#8696FE',
  blue_300: '#ACBCFF',
  blue_200: '#AEE2FF',
  blue_100: '#E6FFFD',



  purple_100: '#F4EEE0', //'#A5D7E8',
  
  cold_400: '#C4DFDF',
  cold_300: '#D2E9E9',
  cold_200: '#E3F4F4',
  cold_100: '#F8F6F4',
}

export const GlobalStyle = StyleSheet.create({
  fullContainer: {
    flex: 1
  }, 
  container: {
    flex: 1,
    backgroundColor: COLORS.blue_900
  },
   container_center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    cornered: true,
    borderRadius: 5,
    color: 'white',
    
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
   heading: {
    fontSize: 40,
    color: '#BE2490',
    fontWeight: 'bold',
    marginBottom: 20
  },

});