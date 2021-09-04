import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SvgComponent from '../components/IconVerde'



export default function Home(){
	return (
		<View style={styles.container}>
            <View style={styles.body}>

            </View>
            <View style={styles.bottom}>
                <View >

                </View>
                <View style={styles.bottom2}>
                     <SvgComponent style={styles.icon}/>
                </View>

            </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
        backgroundColor: '#000',
        flexDirection: 'column',
        direction: 'ltr',
	},

    body: {
        height: '92%',
        width: '100%',
        backgroundColor: '#DEEFDE',
	},

    bottom: {
        height: '8%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems:'center',
    },


    bottom2: {
        height: '0%',
        width: '100%',
        backgroundColor: '#90e034',
        alignItems:'center',
        margin: -40,
    },

});

/*        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params 
            navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          /> */