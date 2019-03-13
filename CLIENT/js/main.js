$(function() {
    //homepage
    $('#newButton').click(() => window.location += "new");
    $('#searchButton').click(() => window.location += "search");
    $('#viewButton').click(() => window.location += "view");


    // new profile page
    var newPostUrl = "http://localhost:555/api/new";

    var postProfile = userProfile => new Promise((resolve, reject) => {
        console.log(JSON.stringify(userProfile))
        var request = new XMLHttpRequest();
        request.open('POST', newPostUrl);
        request.setRequestHeader("Content-Type", "application/json")
        request.send(JSON.stringify(userProfile));
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //var res = JSON.parse(this.responseText);
                (resolve(this.responseText));
            }
        };
        request.onerror = err => reject(err);
    })

    function submitProfile() {
        var picurl = $('#picurl').val();
        var name = $('#name').val();
        var bio = $('#bio').val();
        var github = $('#github').val();
        var discord = $('#discord').val();
        var snapchat = $('#snapchat').val();
        var instagram = $('#instagram').val();
        var reddit = $('#reddit').val();
        var steam = $('#steam').val();
        var twitter = $('#twitter').val();
        var facebook = $('#facebook').val();
        var userProfile = {picurl, name, bio, github, discord, snapchat, instagram, reddit, steam, twitter, facebook};
        console.log(JSON.stringify(userProfile));
        postProfile(userProfile)
        .then(res => window.location = "http://presdense.soopre.me/id/" + res)
        .catch(err => {return $('#title').text(err)});

    }

    $('#submit').click(submitProfile);

});