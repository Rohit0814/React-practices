function getName(name:string):number{
    console.log(name);
    return 10;
}

const post = [
    {
        title:'lorem ipsume',
        content : 'lorem50'
    },
    {
        title:'lorem ipsume',
        content : 'lorem50'
    },
    {
        title:'lorem ipsume',
        content : 'lorem50'
    }
]

type User = {
    name: string;
    email: string;
    ispaid : boolean
}

function createUser(user:User):User{
    return {name:"",email:"",ispaid:true}
}

createUser({name:"",email:"",ispaid:true})

post.map((data:{}) => {
    console.log(data);
})


// getName(12);
getName('rohit');
export {}