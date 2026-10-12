const hash = {
    "Marcus Aurelius": "+380445554433",
    "Alex": "+380501112233",
    "Maria": "+380671234567"
};

function findPhoneByName(name) {
    return hash[name];
}

console.log(findPhoneByName("Alex"));