import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         adress: 'ha noi viet nam',
//         age: Number
//     }
//     //jsx : cho phep viet code js trong file html
//     handleClick(event) {
//         // console.log(">>> click meeeee");
//         // console.log("My name is: ", this.state.name);
//         this.setState({
//             name: 'micheal',
//             age: Math.floor((Math.random() * 100) + 1)
//         })
//     }
//     handleOnMouseOver(event) {
//         // console.log(event);
//     }
//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })

//     }
//     handleOnChangeInputAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })

//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();   // ngan ko cho load lai trang
//         console.log(this.state);

//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age

//         });
//     }
//     render() {

//         return (
//             <div>
//                 my name is {this.state.name}
//                 <br></br>
//                 i'm  {this.state.age}
//                 {/* <button onClick={(event) => { this.handleClick(event) }}>click me</button>
//                 <button onMouseOver={this.handleOnMouseOver}>hover me</button> */}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name: </label>
//                     <input type="text"
//                         value={this.state.name}
//                         onChange={(event) => { this.handleOnChangeInput(event) }}
//                     />

//                     <br></br>
//                     <label>Your age: </label>
//                     <input type="text"
//                         value={this.state.age}
//                         onChange={(event) => { this.handleOnChangeInputAge(event) }}
//                     />
//                     <br></br>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
const AddUserInfor = (props) => {

    const [name, setName] = useState('');
    const [adress, setAdress] = useState('ha noi');
    const [age, setAge] = useState('');

    const handleClick = (event) => {
        setName('micheal')
        setAge(Math.floor((Math.random() * 100) + 1))
    }
    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeInputAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();   // ngan ko cho load lai trang
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }
    return (
        <div>
            my name is {name}
            <br></br>
            i'm  {age}

            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input type="text"
                    value={name}
                    onChange={(event) => { handleOnChangeInput(event) }}
                />

                <br></br>
                <label>Your age: </label>
                <input type="text"
                    value={age}
                    onChange={(event) => { handleOnChangeInputAge(event) }}
                />
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfor