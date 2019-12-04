import React from 'react'
import axios from 'axios'

class DataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            stats: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value})
      }

    handleSubmit(event) {
        event.preventDefault();
        axios.get(`https://maplestory.io/api/ranking/${this.state.userName}`).then(res => {
          this.setState({ stats: res.data })
           console.log(this.state.stats)
        });
      }


    render(){
        const { stats } = this.state
        return(
           <div>
               <input type="text" placeholder='UserName' onChange={this.handleChange} name='userName' />
               <button onClick= {this.handleSubmit}>Show My Stats!!</button>
               <p> World: {stats.world} </p>
               <p> Job: {stats.job} </p>
               <p> Level: {stats.level} </p>
               <p>  Ranking: {stats.ranking} </p>
               
            
           </div>
        )
    }
}

export default DataComponent
