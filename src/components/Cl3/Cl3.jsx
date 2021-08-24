// import React from 'react'
// import { useState, useEffect } from "react";
// import { ScrollView } from 'react-native';
// import { Image, ScrollView, Text } from 'react-native';
// function Cl3() {
//     const [allUsers, setAllUsers] = useState([]);
//     const [users, setUsers] = useState([]);
  
//     useEffect(() => {
//       (async () => {
//         let userData;
//         try {
//           const response = await fetch("https://randomuser.me/api/?results=10");
//           userData = await response.json();
//         } catch (error) {
//           console.log(error);
//           userData = [];
//         }
//         setAllUsers(userData.results);
//         setUsers(userData.results);
//       })();
//     }, []);
  
//     const filterCards = event => {
//       const value = event.target.value.toLowerCase();
//       const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
//       setUsers(filteredUsers);
//     }
  
//     return (
//       <div >
//         <h1>Social Cards</h1>
//         <input className="search-box" onInput={filterCards} placeholder="Search..."/>
//         <div className="cards-container">
  
//         {users.map((user, index) => (

//           <SocialCard key={index} userData={user} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// export default Cl3