const contacts = [
    { name: "Marcus Aurelius", phone: "+380445554433" },
    { name: "Alex", phone: "+380501112233" },
    { name: "Maria", phone: "+380671234567" },
    { name: "Schnabel", phone: "+380998887766" },
    { name: "Dementrii", phone: "+380631234567" },
    { name: "Verity", phone: "+380501234567" },
];

function findPhoneByName(name) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name) {
            return contacts[i].phone;
        }
    }
}

console.log(findPhoneByName("Schnabel"));
