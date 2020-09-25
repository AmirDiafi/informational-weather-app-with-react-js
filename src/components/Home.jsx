import React from 'react'
import Card from './Card'
import Data from './data.json'

class Home extends React.Component {
    constructor() {
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount() {
        this.setState({
            data:Data.filter(data=>data.new===true)
        })
    }

    render() {
        return(
            <div className='container'>
                <div className='row'>
                {
                this.state.data.length!==0
                ?this.state.data
                .map(data=><Card key={data.id} data={data}/>)
                :<img src='media/images/wait.gif' className='wait' alt='' />
                }
                </div>
            </div>
        )
    }
}
 
export default Home;