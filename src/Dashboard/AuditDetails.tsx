import React, { useContext, useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { useAuth } from '../context/AuthContext'
import { COLORS, GlobalStyle } from '../styles/GlobalStyle';
import { AntDesign } from '@expo/vector-icons';



const auditData = 
  {
        id: '1',
        auditor: {
            id:  '1',
            name: 'arviond rwat',
        },
        audit_date: '20-03-2023',
        actual_audit_date: '20-03-2023',
        audit: {
            audit_name: 'Class 10 Room',
            questions: [{
                serial_number: 1,
                question_id: 1,
                type: 'TEXT',
                questionTitle: 'What are some common areas checked during a room audit?',
                options: [],
                answer: 'Common areas checked during a room audit include cleanliness of surfaces, bedding, and bathrooms; functionality of electrical fixtures and appliances; safety measures such as smoke detectors and fire extinguishers; and overall room maintenance.'
            },
              {
                serial_number: 2,
                  question_id: 2,
                type: 'TEXT',
                questionTitle: 'Why is conducting a room audit important?',
                options: [],
                answer: ' Room audits help maintain quality standards, identify areas for improvement, ensure compliance with regulations, enhance guest satisfaction, and maintain a safe and comfortable environment.'
                
            },
                {
                serial_number: 3,
                question_id: 3,
                type: 'SINGLE_SELECT',
                questionTitle: 'How would you rate the overall organization and structure of the course?',
                    options: [{
                        id: 1,
                        value: 'Excellent',
                        title: 'Excellent',
                    },
                        {
                        id: 2,
                        value: 'Good',
                        title: 'Good',
                    },{
                        id: 3,
                        value: 'Average',
                        title: 'Average',
                    },{
                        id: 4,
                        value: 'Needs improvement',
                        title: 'Needs improvement',
                    },
                    ],
                    answer: {
                        id: 4,
                        value: 'Needs improvement',
                        title: 'Needs improvement',
                    }
                    
            }
                
            ]
            
        },
        auditanswered: [
            {
                question_id: 1,
                answer: 'Common areas checked during a room audit include cleanliness of surfaces, bedding, and bathrooms; functionality of electrical fixtures and appliances; safety measures such as smoke detectors and fire extinguishers; and overall room maintenance.'
            },
            {
                questions_id: '123',
                answer: ' Room audits help maintain quality standards, identify areas for improvement, ensure compliance with regulations, enhance guest satisfaction, and maintain a safe and comfortable environment.'
            },
            {
                questions_id: '123',
                answer: {
                        id: 4,
                        value: 'Needs improvement',
                        title: 'Needs improvement',
                    }
            }
        ]

  }


  interface OptionInterface {
        id: number,
        title: string,
        value: string,
}



interface QuestionInterface {
        serial_number: number,
        question_id: string,
        type: string,
        questionTitle: string,
    options?: OptionInterface[]
    answer?: any
}



interface AuditInterface {
  id: string;
  audit: string;
  auditor_id: string;
}

type ItemProps = {
  item: QuestionInterface;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
};


export const AuditDetail: React.FC = (props: any) => {

    const { navigation } = props;

  const [selectedId, setSelectedId] = useState<string>();
  
  const [selectedAuditId, setSelectedAuditId] = useState<string| null>();
  
  const onPressForAudit = () => { 
    navigation.push('Audit')
  }

  const renderItem = ({ item }: { item: QuestionInterface }) => {
    return (
      <Item
        item={item}
      />
    );
   };
  
  const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Text style={[styles.title, { color: textColor }]}> ({item.serial_number}) {item.questionTitle}</Text>
          {
              item.options?.map((op: OptionInterface) => <><Text style={styles.option}> ({op.id}) { op.title} </Text>
              </>)
          }
          {(
              item.answer &&
              <View  style= {styles.answer}>
                  <Text>Answer:</Text>
                  {
                      (item.type === 'SINGLE_SELECT' && <Text>({item.answer.id}) {item.answer.title} </Text>) ||
                      (item.type === 'TEXT' && <Text>{item.answer} </Text>)
                  }
              </View>
          )}
          
  </TouchableOpacity>
  );
  

  return (
    <View style={styles.fullContainer}>
      <View style={[styles.container]}>
        <View style={[{
          padding: 10,
          backgroundColor: COLORS.cold_200
        }]}>
          <Text>Auditor: {auditData.auditor.name}</Text>
          <Text>{auditData.actual_audit_date}</Text>
        </View> 
        
          <FlatList
            style={[{margin: 10}]} 
            data={auditData.audit.questions}
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
    borderRadius: 5,
    minWidth: 100,
    backgroundColor: COLORS.cold_400
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
  },

  answer: {
    backgroundColor: COLORS.cold_200,
    padding: 5,
    marginVertical: 10,
    
  },
  option: {
    paddingVertical: 5
  }
  

});
 


