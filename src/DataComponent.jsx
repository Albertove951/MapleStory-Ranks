import React from 'react'
import axios from 'axios'

class DataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            userName: '',
            data: ''
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
          this.setState({ 
              data: res.data,
              isLoading: false
            })
          console.log(this.state.data)
        });
      }

    render(){
        return(
           <div>
                <input type="text" placeholder='UserName' onChange={this.handleChange} name='userName' />
               <button onClick= {this.handleSubmit}>Show My Stats!!</button>
               <p></p>
           </div>
        )
    }
}

export default DataComponent



