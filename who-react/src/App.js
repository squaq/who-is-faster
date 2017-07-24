import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
    
    renderContainer = {};
     
    constructor(){
        super();        
        this.getData((data)=>{
            let objs = data.data.data.flights;
            let minrender = [];
            for(let i in objs){
                minrender.push(
                    React.createElement("tbody", {key:i},
                        React.createElement("tr", null,
                            React.createElement("th", {scope:'row'}, objs[i].flight_code),
                            React.createElement("td", null, `${objs[i].origin.title} (${objs[i].origin.initials})`),
                            React.createElement("td", null, `${objs[i].destination.title} (${objs[i].destination.initials})`),
                            React.createElement("td", null, `${objs[i].duration}`),
                            React.createElement("td", null, `${objs[i].company.title}`)
                        )
                    )
                )
            }
            this.renderContainer = minrender;
            ReactDOM.render(this.builddata(), document.getElementById('root'))
        });
        
    }

    builddata(){
        
        return <div className="App">
            <div className="container">
               <h2 className="text-primary">React test</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>code</th>
                                <th>from</th>
                                <th>to</th>
                                <th>duration</th>
                                <th>company</th>
                            </tr>
                        </thead>
                        {this.renderContainer}
                    </table>
                </div>
            </div> 

          </div>
    }
    
    
    getData(callback){
        axios.get('https://api.myjson.com/bins/10ldcj')
        .then(function (data) {
            callback(data);    
        })
        .catch(function (error) {
            callback(error);    
        });
    }

    render() {
        console.log(Object.keys(this.renderContainer).length)
        if(Object.keys(this.renderContainer).length === 0 ){
            return <div>Loading...</div>
        }
        
        return (this.builddata());
    }
}

export default App;
