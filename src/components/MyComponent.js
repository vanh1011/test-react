
import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";


// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "arigatou", age: "18" },
//             { id: 2, name: "ashita", age: "21" },
//             { id: 3, name: "kyuno", age: "22" }
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         // console.log(">>>> checkk");
//         console.log("check " + userObj);
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers,]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUserClone = this.state.listUsers;
//         listUserClone = listUserClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUserClone
//         })

//     }
//     render() {

//         return (
//             <>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <br />
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}

//                 />
//             </>
//         )
//     }
// }


const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "arigatou", age: "18" },
            { id: 2, name: "ashita", age: "21" },
            { id: 3, name: "kyuno", age: "22" }
        ]
    )
    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    }
    const handleDeleteUser = (userId) => {
        let listUserClone = listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId)
        setListUsers(listUserClone)
    }

    return (
        <>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}

            />
        </>
    )
}
export default MyComponent;