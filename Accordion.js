import React,{Component} from 'react';
class Accordion extends Component{
      state={
          showInfo:false
      }

handleToggle=()=>{
    this.setState({
        showInfo:!this.state.showInfo
    })

}
   
render(props){
        const {title,texts}=this.props

         return(
            <div className="main">
           <div className={this.state.showInfo?"  tab active" : "tab"} onClick={this.handleToggle}>
         <p >{title}</p><i className={this.state.showInfo?"fas fa-minus":"fas fa-plus"}></i>
         </div>
          
                <div className={this.state.showInfo ? "content showContent":"content" }>
        
        <p>{texts}</p>
               
                </div>
           
            </div>
        )
    }
}
export default Accordion