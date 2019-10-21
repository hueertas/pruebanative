import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
//borrar cuando lo pongamos bien
import Content from './Content';
import Navbar from "./Navbar";
import {View} from 'react-native';
import { questionAnswer } from './../reducers/actions';
import { changeQuestion } from './../reducers/actions';
import { submit } from './../reducers/actions';
import { initQuestions } from './../reducers/actions';


class GameScreen extends Component {

    constructor(props){
        super(props);
        this.downloadQuestions = this.downloadQuestions.bind(this);

    }

    downloadQuestions(){
        fetch("https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=dbd0468cf07f1db28792")
            .then(function(response){
                return response.json();
            })
            .then(questionsDownloaded => {
                this.props.dispatch(initQuestions(questionsDownloaded));
            });

    }


    componentDidMount(){
        this.downloadQuestions();
    }



    render() {
        return (

            <View style = {{flex:1, margin:10, justifyContent:'flex-start'}}>
                <Navbar/>
                <Game currentQuestion={this.props.currentQuestion}
                      lengthQuestions={this.props.questions.length}
                      finished={this.props.finished}
                      score={this.props.score}
                      questions={this.props.questions}
                      question={this.props.questions[this.props.currentQuestion]}
                      onReset={()=>{
                          this.componentDidMount()
                      }}
                      onChangeQuestion={(index)=>{
                          this.props.dispatch(changeQuestion(index))
                      }}
                      onSubmit={(questions)=>{
                          this.props.dispatch(submit(questions))
                      }}
                      onQuestionAnswer={(answer)=>{
                          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                      }}
                />
            </View>);
    }
}



function mapStateToProps(state){
    return{
        ...state
    };
}


export default connect(mapStateToProps)(GameScreen);