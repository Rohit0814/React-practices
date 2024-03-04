"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getName(name) {
    console.log(name);
    return 10;
}
var post = [
    {
        title: 'lorem ipsume',
        content: 'lorem50'
    },
    {
        title: 'lorem ipsume',
        content: 'lorem50'
    },
    {
        title: 'lorem ipsume',
        content: 'lorem50'
    }
];
function createUser(user) {
    return { name: "", email: "", ispaid: true };
}
createUser({ name: "", email: "", ispaid: true });
post.map(function (data) {
    console.log(data);
});
// getName(12);
getName('rohit');
