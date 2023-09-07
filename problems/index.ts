// let helloworld = 'Hello aunt May';
// console.log(helloworld);

// const doSomething = () => {

// }

const users = 'test';


let x: number;
x = "foo";

const user: User = {
    name: "Hayes",
    id: 0,
};

interface User {
    // name: string,
    id: number
}

function deleteParams(input: User) {

}

deleteParams({
    id: 'test'
})

function getUserDetails(): User {
    return {
        id: 2
    }
}

//any, unknown, never