// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin (user){
    
    if (user.userRole === "ADMIN"){
        return true;
    }else{
        return false
    }
}

function getEmail (user){
    const lowerFirst = user.firstName.toLowerCase()
    const lowerLast = user.lastName.toLowerCase()
    return `${lowerFirst}.${lowerLast}@codeimmersives.com`
}

function getPlaylistLength (playlist){
    return playlist.songs.length
}



function getHardestHomework(str){
    let hard = ""
    let lowest = 1000
    for(const score of str){
        if(score.averageScore < lowest) {
            lowest = score.averageScore;
            hard = score.name;
        }
    }
    return hard;
}

function createPhonebook(name, phone){
    let obj = {};
    for (let i = 0; i < name.length; i++){
        obj[name[i]] = phone[i];
    }
    return obj;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};