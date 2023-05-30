import React, { Component } from "react";

const result = [
  {
    id: 1,
    username: "nguyenvana",
    avatar: `https://i.pravatar.cc?u=1`,
    age: 20,
    phone: "09090909",
  },
  {
    id: 2,
    username: "nguyenvanb",
    avatar: `https://i.pravatar.cc?u=2`,
    age: 35,
    phone: "1111111111",
  },
  {
    id: 3,
    username: "nguyenvanc",
    avatar: `https://i.pravatar.cc?u=3`,
    age: 44,
    phone: "884444",
  },
];
export default class RenderWithMap extends Component {
  // renderUser = () => {
  //     let output = [];
  //     for (let user of result){
  //         let jsxTR = <tr key={user.id}>
  //             <td>{user.username}</td>
  //             <td><img src={user.avatar} alt="" width={50} height={50} /></td>
  //             <td>{user.age}</td>
  //             <td>{user.phone}</td>
  //         </tr>
  //         output.push(jsxTR);
  //     }
  //     return output;
  // }

  renderUser = () => {
    return result.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.username}</td>
          <td>
            <img src={user.avatar} alt="" width={50} height={50} />
          </td>
          <td>{user.age}</td>
          <td>{user.phone}</td>
        </tr>
      );
    });
  };
12
  renderCardUser = () => {
    return result.map((user) => {
        return <div className="col-4" key={user.id}>
            <div className=" m-3 card">
            <div className="card-header">
                <img src={user.avatar} alt="" className="w-100"/>
            </div>
            <div className="card-body">
                <p>Username: {user.username}</p>
                <p>Age: {user.age}</p>
                <p>Phone: {user.phone}</p>
            </div>
            </div>
            
        </div>
    })
  }
  render() {
    return (
      <div className="container">
        <h3>List User</h3>
        <table className="table">
          <thead>
            <tr>
              <th>username</th>
              <th>avatar</th>
              <th>age</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>{this.renderUser()}</tbody>
        </table>
        <hr />
        <h3>List member</h3>
        <div className="row">
            {this.renderCardUser()}
        </div>



      </div>
    );
  }
}
