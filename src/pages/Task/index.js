import React,{useState,useEffect}from "react";
import {
    SafeAreaView ,
    View, 
    Text,
    TouchableOpacity,
    FlatList} from "react-native"; 
import database from '../../config/firebaseconfig'
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'

export default function Task({ navigation }){
    const [task, setTask] = useState([])

    useEffect(()=>{
        database.collection("Tasks").onSnapshot((query)=>{
            const list = []
            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id})
            });
            setTask(list)
        })
    }, [])
    return(
        <View>

            <TouchableOpacity style={styles.buttonNewTask}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
