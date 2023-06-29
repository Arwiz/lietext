import { TouchableOpacity, View, Text, Button, StyleSheet } from "react-native";


const ButtonPrimary = ({ onPressHanlder }: any) => {
 
    return (<Button
        title="Login"
        onPress={onPressHanlder} />);
};

const ButtonCustomPrimary = ({ onPress, title }: any) => {
 
  return (
      <View>
         <TouchableOpacity
              style={[styles.primary, {
                  justifyContent: 'center',
                  alignItems: 'center'
              }]}
            onPress={onPress}
        >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    primary: {
        backgroundColor: '#F361AF',
        margin: 10,
        padding: 10,
        borderRadius: 50,
        alignSelf: 'center',
        rounded: true,
        minWidth: 100,
        textAlign: 'center',
        
    }

});

export {
    ButtonPrimary,
    ButtonCustomPrimary
};