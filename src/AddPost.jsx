import React,{Component} from 'react'
import Header from './Component/Header'
import AddForm from './Component/AddForm'

export default class AddPost extends Component{
    render(){
        return(
            <div className="AddPost">
                <Header></Header>
                <AddForm />
            </div>
        )
    }
}