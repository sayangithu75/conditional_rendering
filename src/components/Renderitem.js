
import React from "react";
import Pokemon from './Pokemon.js'
function Renderitem() {
       const list=[
        {"name":"bulbasaur",
        "url":"https://pokeapi.co/api/v2/pokemon/1/"},
        {"name":"ivysaur",
        "url":"https://pokeapi.co/api/v2/pokemon/2/"},
        {"name":"venusaur",
        "url":"https://pokeapi.co/api/v2/pokemon/3/"},
        {"name":"charmander",
        "url":"https://pokeapi.co/api/v2/pokemon/4/"},
        {"name":"charmeleon",
        "url":"https://pokeapi.co/api/v2/pokemon/5/"},
        {"name":"charizard",
        "url":"https://pokeapi.co/api/v2/pokemon/6/"},
        {"name":"squirtle",
        "url":"https://pokeapi.co/api/v2/pokemon/7/"},
        {"name":"wartortle",
        "url":"https://pokeapi.co/api/v2/pokemon/8/"},
        {"name":"blastoise",
        "url":"https://pokeapi.co/api/v2/pokemon/9/"},
        {"name":"caterpie",
        "url":"https://pokeapi.co/api/v2/pokemon/10/"},
        {"name":"metapod",
        "url":"https://pokeapi.co/api/v2/pokemon/11/"},
        {"name":"butterfree",
        "url":"https://pokeapi.co/api/v2/pokemon/12/"},
        {"name":"weedle",
        "url":"https://pokeapi.co/api/v2/pokemon/13/"},
        {"name":"kakuna",
        "url":"https://pokeapi.co/api/v2/pokemon/14/"},
        {"name":"beedrill",
        "url":"https://pokeapi.co/api/v2/pokemon/15/"},
        {"name":"pidgey",
        "url":"https://pokeapi.co/api/v2/pokemon/16/"},
        {"name":"pidgeotto",
        "url":"https://pokeapi.co/api/v2/pokemon/17/"},
        {"name":"pidgeot",
        "url":"https://pokeapi.co/api/v2/pokemon/18/"},
        {"name":"rattata",
        "url":"https://pokeapi.co/api/v2/pokemon/19/"},
        {"name":"raticate",
        "url":"https://pokeapi.co/api/v2/pokemon/20/"}
        // {
        //     title:'React',
        //     url:'https://www.w3schools.com/REACT/DEFAULT.ASP',
        //     author:'Sayan Samanta',
        //     num_comments:3,
        //     points:4,
        //     objectId:0,
        // },
        // {
        //     title:'JavaScript',
        //     url:'https://www.w3schools.com/js/',
        //     author:'Niranjan baur',
        //     num_comments:2,
        //     points:5,
        //     objectId:1,
        // },
        // {
        //     title:'ReactNative',
        //     url:'https://www.tutorialspoint.com/react_native/index.htm',
        //     author:'Umesh Sahoo',
        //     num_comments:6,
        //     points:4,
        //     objectId:2,
        // },
        // {
        //     title:'HTML/CSS',
        //     url:'https://www.w3schools.com/css/',
        //     author:'Sangram Dey',
        //     num_comments:5,
        //     points:8,
        //     objectId:3,
        // },
        // {
        //     title:'Node',
        //     url:'https://www.tutorialspoint.com/nodejs/index.htm',
        //     author:'Spandita Banerjee',
        //     num_comments:8,
        //     points:3,
        //     objectId:4,
        // }
    ]
    const listName=list.map(n=> <Pokemon key={n.url} n={n}/>)
    return (
        <div>
            {
                listName
            }
        </div>
    )
}
export default Renderitem
