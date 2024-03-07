type User={
    name: string;
    _id: number;
    ispaid: boolean;
}

function getUser(user:User):User{
    return user
}

getUser({name:'rohit', _id:1, ispaid:false});

export {}