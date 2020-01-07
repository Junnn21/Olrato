import React,{Component} from 'react'
import './AddForm.css'

export default class AddForm extends Component{
    render(){
        return(
            <div className="addForm">
                <form>
                    <div className="formItem">
                        <p>Category:</p>
                        <select>
                            <option value="Basketball">Basketball</option>
                            <option value="Football">Football</option>
                            <option value="Running">Running</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Golf">Golf</option>
                            <option value="Climbing">Climbing</option>
                            <option value="Badminton">Badminton</option>
                            <option value="Table Tennis">Table Tennis</option>
                            <option value="Volley">Volley</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="formItem">
                        <p>Description:</p>
                        <textarea cols="83" rows="7"></textarea>
                    </div>
                    <div className="formItem">
                        <p>Image:</p>
                        <input type="file"/>
                    </div>
                    <div className="formItem">
                        <p>Date:</p>
                        <input type="date"/>
                    </div>
                    <div className="formItem">
                        <p>Place:</p>
                        <input type="text"/>
                    </div>
                    <div className="formItem">
                        <p>Peoples:</p>
                        <input type="number"/>
                    </div>
                    <div className="formItem">
                        <button type="submit">Post</button>
                    </div>
                </form>
            </div>
        )
    }
}