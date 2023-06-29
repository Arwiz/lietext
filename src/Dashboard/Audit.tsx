import React, { useContext, useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { useAuth } from '../context/AuthContext'
import { COLORS, GlobalStyle } from '../styles/GlobalStyle';
import { AntDesign } from '@expo/vector-icons';




const moduleData = [
  {
    id: '1',
    audit: 'Class Room',
    auditor_id: '1',
  },
    {
    id: '2',
    audit: 'Washroom',
    auditor_id: '1',
  },
  {
    id: '3',
    audit: 'Playground',
    auditor_id: '2',
  },
  
];

const appData = [
  {
    id: '1',
    module: 'School',
  },
  {
    id: '2',
    module: 'Hospital',
  },
  {
    id: '3',
    module: 'Station',
  },
   {
    id: '4',
    module: 'School',
  },
  {
    id: '5',
    module: 'Hospital',
  },
  {
    id: '6',
    module: 'Station',
  },
   {
    id: '7',
    module: 'School',
  },
  {
    id: '8',
    module: 'Hospital',
  },
  {
    id: '9',
    module: 'Station',
  },
]


interface ModuelsInterface {
  id: string;
  module: string;
}



interface AuditInterface {
  id: string;
  audit: string;
  auditor_id: string;
}

type ItemProps = {
  item: ModuelsInterface;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

type AuditProps = {
  item: AuditInterface;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

export const Audit: React.FC = (props: any) => {

    const { navigation } = props;

  const [selectedId, setSelectedId] = useState<string>();
  
  const [selectedAuditId, setSelectedAuditId] = useState<string| null>();
  
  const onPressForAudit = () => { 
    navigation.push('Audit')
  }

   const renderItem = ({item}: {item: ModuelsInterface}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
            onPress={() => {
                setSelectedId(item.id)
                navigation.push('AuditDetail', { data: item });
            }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
   };
  
  const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.module}</Text>
  </TouchableOpacity>
  );
  

  return (
    <View style={styles.fullContainer}>
          <View style={[styles.container]}>
          <FlatList
            style={[{margin: 10}]} 
            data={appData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
  ...GlobalStyle,
  header_category : {
    fontSize: 20,
    color: COLORS.purple_100
  },
  header_view : {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.blue_900,
    color: COLORS.purple_100
  },
  sub_header_category : {
    fontSize: 16,
    color: 'red'
  },
  row: {
    flexDirection: 'row',
  },
  module_view: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 40
    
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 50,
    minWidth: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audit_item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
  },
  normal_text: {
    fontSize: 16,
  }
  

});
 


