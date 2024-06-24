// Array to store friends' information
var friends = [];

function addFriend() {
    // Get input values
    var friendName = document.getElementById('friendName').value;
    var friendBirthday = document.getElementById('friendBirthday').value;

    // Clear input fields
    document.getElementById('friendName').value = '';
    document.getElementById('friendBirthday').value = '';

    // Create object with friend's information
    var friend = {
        name: friendName,
        birthday: friendBirthday
    };

    // Add friend to array
    friends.push(friend);

    // Display friends' birthdays
    displayFriends();
}

function displayFriends() {
    var friendsList = document.getElementById('friendsList');
    friendsList.innerHTML = ''; // Clear previous list

    friends.forEach(function(friend, index) {
        var friendItem = document.createElement('div');
        friendItem.classList.add('friend-item');
        friendItem.textContent = friend.name + ' - ' + formatDate(friend.birthday);
        friendsList.appendChild(friendItem);
    });
}

function checkBirthdays() {
    var today = new Date();
    var todayStr = formatDate(today);

    var birthdayMatches = friends.filter(function(friend) {
        var friendBirthday = new Date(friend.birthday);
        return friendBirthday.getMonth() === today.getMonth() && friendBirthday.getDate() === today.getDate();
    });

    if (birthdayMatches.length > 0) {
        var message = "<strong>Today's Birthdays:</strong><br>";
        birthdayMatches.forEach(function(friend) {
            message += friend.name + "<br>";
        });
        document.getElementById('output').innerHTML = message;
    } else {
        document.getElementById('output').innerHTML = "No friends have birthdays today.";
    }
}

function formatDate(dateStr) {
    var date = new Date(dateStr);
    var day = date.getDate();
    var month = date.getMonth() + 1; // Months are zero indexed
    var year = date.getFullYear();

    return day + '/' + month + '/' + year;
}
