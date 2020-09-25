import React from 'react'
import Card from './Card'
import Data from './data.json'
import Wait from '../assets/error.png'

class Display extends React.Component {
    constructor() {
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount() {
        this.setState({
            data:Data.filter(data=>data.type===this.props.match.params.id)
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id!==this.props.match.params.id) {
            this.setState({
                data:Data.filter(data=>data.type===this.props.match.params.id)
            })
        }
    }

    render() {
        return(
            <div className='container'>
                <div className='row'>
                {
                    this.state.data.length!==0
                    ?this.state.data
                    .map(data=><Card key={data.id} data={data}/>)
                    :<img src={Wait} className='wait' alt='' />
                }
                </div>
            </div>
        )
    }
}
 
export default Display;