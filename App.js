import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './Component/Accordion.js'


class App extends Component {

  state={
    data:[
      {
        title:'Google',
        texts:'search for information about (someone or something) on the Internet using the search engine Google.'
        
    },{
        title:'Youtube',
        texts:'upload a video of (someone or something) to the video-sharing website YouTube.'
    }
    ]
  }
  render(){
  return (
    <div className="accordion">
      {this.state.data.map((item,index)=>{
        return <Accordion key={index} title={item.title} texts={item.texts}/>
      })}
     
     
    </div>
  );
}
}
export default App;
