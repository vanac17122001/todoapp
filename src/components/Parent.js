import React,{Component} from "react";
import Child from "./Child";

export default class Parent extends Component{
    render (){
        return (
            <div>
                <h1>I am parent Component</h1>
                <Child Title="I am text from Parent Component"></Child>
            </div>
        );
    }
}