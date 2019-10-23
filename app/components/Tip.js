import React, {Fragment} from 'react';
import './App.css';
import {View,StyleSheet,Text,FlatList} from 'react-native';


export default class Tip extends React.Component{
    render(){
        return(
            <div className={"cuerpo"}>
                    Tips:
                    {this.props.question.tips.length === 0 ?
                        <p>{"No tips"}</p> : this.props.question.tips.map(function (t){
                            return <p>{t}</p>;
                        })}
            </div>
        )

    }

}

const styles = StyleSheet.create({
    text: {
        fontStyle: 'italic'
    },
    list: {},
    box: {},
    marginTop: 20
});