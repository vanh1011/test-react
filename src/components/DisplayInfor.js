import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
// prop: properties
// stateless/ statefull
// class DisplayInfor extends React.Component {


//     // componentDidMount() {
//     //     console.log(">>call me cpn");
//     //     setTimeout(() => {
//     //         document.title = 'ho viet anh '
//     //     }, 3000);
//     // }
//     // componentDidUpdate() {
//     //     console.log("DidUpdate");

//     // }

//     render() {
//         console.log(">>> call me render ");
//         //  cach 1 
//         //console.log(this.props);
//         // cach 2 dung destructuring
//         const { listUsers } = this.props;  //this.props la obj  nen dung ngoac nhon
//         // = const listUsers = this.props.listUsers
//         console.log(listUsers);
//         return (
//             <div className="display-infor-container">

//                 {true && //  dieu kien bang: true=> xay ra or false=> ko xay ra
//                     <>
//                         {listUsers.map((user) => {  //fragment
//                             return (
//                                 <>
//                                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                         <div> name: {user.name} </div>
//                                         <div> age: {user.age} </div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => { this.props.handleDeleteUser(user.id) }}> Delete </button>
//                                     </div>
//                                 </>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    //this.props la obj  nen dung ngoac nhon
    const [isShowHideListUsers, setShowHideListUsers] = useState(true)
    const handleShowHideListUsers = () => {
        setShowHideListUsers(!isShowHideListUsers);
    }
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUsers()}>
                    {isShowHideListUsers === true ? 'Hide list users' : 'Show list users'}
                </span>
            </div>
            {isShowHideListUsers && //  dieu kien bang: true=> xay ra or false=> ko xay ra
                <>
                    {listUsers.map((user) => {  //fragment
                        return (
                            <>
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div> name: {user.name} </div>
                                    <div> age: {user.age} </div>
                                </div>
                                <div>
                                    <button onClick={() => { props.handleDeleteUser(user.id) }}> Delete </button>
                                </div>
                            </>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;