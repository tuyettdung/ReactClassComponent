import React, {Component} from 'react';


export default class Card extends Component {


    render (){
        //Nội dung component chứa trong return của phương thức render
        return <div className='card'>
            <img src="http://i.pravatar.cc?u=5" alt="" />
            <div className='card-body'>
                <h3>Name: Quân Mentor</h3>
                <p>Age: 40</p>
            </div>
        </div>
    }
}

