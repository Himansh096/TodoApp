// import React, { useState, useEffect } from "react"



// const Test = () => {
//     const [initailaData, setInitialdata] = useState([])
//     const [showData, setShowData] = useState(true)
//     const switchList = () => { setShowData(false) }

//     // useEffect(() => {
//     const fetchData = async () => {
//         const response = await fetch("http://jsonplaceholder.typicode.com/users");
//         const data = await response.json();

//         setInitialdata(data);

//     };
//     fetchData()


//     // }, []);


//     return <div className="App">
//         {initailaData.map((data) => <li>{data.name}</li>)}

//         <button onClick={fetchData}>Click me</button>
//         <button onClick={switchList}>Hide data</button>
//     </div>
// }
// export default Test


// // export default function App() {
// //     const fetchData = async () => {
// //         const response = await fetch("http://jsonplaceholder.typicode.com/users");
// //         const data = await response.json();
// //         console.log(data);
// //     };
// //     return (
// //         <div className="App">
// //             <h1>Hello CodeSandbox</h1>
// //             <h2>Start editing to see some magic happen!</h2>
// //             <button onClick={fetchData}>Click me</button>
// //         </div>
// //     );
// // }