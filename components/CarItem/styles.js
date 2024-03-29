import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '600',
    
      },
      subtitle: {
        fontSize: 16,
        color: '#5c5e62',
      },
      subtitleCTA: {
        textDecorationLine : 'underline',
      },   
      buttonsContainer: {
        position : 'absolute',
        bottom:50,
        width:'100%',
      }

});

export default styles;