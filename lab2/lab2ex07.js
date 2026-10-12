function fn() {
    const user1 = { name: "Alex" };
    let user2 = { name: "Bob" };

    user1.name = "John";
    user2.name = "Mike";

    user2 = { name: "Sam" };
}

console.log(fn());
