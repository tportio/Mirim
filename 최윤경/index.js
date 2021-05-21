// 사과 모양 누르면 카운트 동시에 사과 정보랑 종류 띄우기
//실패
const {ApolloServer} = require('apollo-server');

const typeDefs = `
    type Query{ 
        name : String
        age : Int
        gender : String
    }
`
/*
type Query(name :$name){ 
        name : String
        age : Int
        gender : String
*/
const resolvers = {
    Query: {
        name: () => "YoonKyoung",
        age: () => 19,
        gender: () => "Female",
    }
}

// function Name({name, age, gender}: {name : String; age : Number; gender : String}){
//     return (
//         <div>
//             {" "}
//             이름 : {name}   나이 : {age}   성별 : {gender}
//         </div>
//     );
// }

// export const USER_QUERY = gql `query User($id: ID!) {
//     getUser(id: $id) {
//         name
//         surname
//     }
// }`;

// function print_name(){
//     return (
//         <div>
//             {data.people ?(
//                 <>
//                     <div> Name : {data.people.name}</div>
//                     <div> Age : {data.people.age}</div>
//                 </>
//             ) : (
//                 "No Name......"
//             )}
//         </div>
//         );
// }


const server = new ApolloServer({
    typeDefs,resolvers
})

server.listen().then(({url}) => console.log(`GraphQL Service running on ${url}`))