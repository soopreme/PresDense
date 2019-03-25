$(function() {
    //homepage
    $('#newButton').click(() => window.location += "new");
    $('#searchButton').click(() => window.location += "search");
    $('#viewButton').click(() => window.location += "view");


    // new profile page
    var domain = "presdense.soopre.me"
    var IDClientLink = `http://${domain}/id/`
    var notFoundLink = `http://${domain}/404`
    var viewProfileLink = `http://${domain}/view`;
    var newPostUrl = `http://${domain}/api/new`;
    var searchPostUrl = `http://${domain}/api/search/name`;
    var IDGetUrl = `http://${domain}/api/id/`;
    var contentTypeHeader = new Headers({
        'Content-Type': 'application/json'
    });

    var postProfile = userProfile => new Promise((resolve, reject) => {
        
        console.log(JSON.stringify(userProfile))
        fetch(newPostUrl, {
            method: 'POST',
            headers: contentTypeHeader,
            body: JSON.stringify(userProfile)
        })
        .then(res => {
            return res.json()
        })
        .then(json => {
            resolve(json);
        })
        .catch(err => {
            reject(err);
        })
    });

    var saveToLocalStorage = res => new Promise((resolve, reject) => {
        if(localStorage.getItem('id')){
            localStorage.removeItem('id');
        }
        localStorage.setItem('id', res.id);
        resolve(res);
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
        postProfile(userProfile)
        .then(saveToLocalStorage)
        .then(res => window.location = IDClientLink + res.id)
        .catch(err => {return $('#title').text(err)});

    }

    $('#submit').click(submitProfile);

    var postJSON = (url, postBody) => new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: contentTypeHeader,
            body: JSON.stringify(postBody)
        })
        .then(res => {
            return res.json();
        })
        .then(json => {
            resolve(json.json);
        })
        .catch(err => {
            reject(err);
        });
    });

    var searchByName = query => new Promise((resolve, reject) => {
        var queryBody = {
            name: query
        };
        postJSON(searchPostUrl, queryBody)
        .then(resolve)
        .catch(reject);
    });

    var renderSearchToDOMCode = searchArray => new Promise((resolve, reject) => {
        var outputToDOM = '<table>\n<tr><th>User Name</th><th>Platform</th><th>Profile Name</th>';
        for(i=0; i<searchArray.length; i++) {
            var isRestrictedPlatform 
            = searchArray[i].foundPlatform === "name"
            ? true
            : searchArray[i].foundPlatform === "picurl"
            ? true
            : searchArray[i].foundPlatform === "bio"
            ? true
            : searchArray[i].foundPlatform === "profileID"
            ? true
            : false
            if(isRestrictedPlatform) {
                continue;
            }
            outputToDOM += `\n<tr>\n<td>${searchArray[i].foundName}</td>\n<td>${searchArray[i].foundPlatform}</td>\n<td><a href="${IDClientLink + searchArray[i].foundProfileID}">${searchArray[i].profileName}</a></td>\n</tr>`;
        }
        outputToDOM += '\n</table>'
        return resolve(outputToDOM)
    })

    function submitSearch() {
        var searchValue = $('#searchValue').val();
        searchByName(searchValue)
        .then(renderSearchToDOMCode)
        .then(res => $('#results').html(res))
        .catch(err => {return $('#title').text(err)});
    }

    $('#submitSearch').click(submitSearch);

    var renderProfileToDOMCode = profileObject => new Promise((resolve, reject) => {
        var outputToDOM = `\n
        <img id="pfp" src="${profileObject.picurl}" />\n
        <h2>${profileObject.name}</h2>\n
        <h4>${profileObject.bio}</h4>\n
        <br><br>\n
        <table>\n
        <tr><th>Platform</th><th>Username</th><tr>\n`
        for(platform in profileObject) {
            var isRestrictedPlatform = (platform === "name" || platform === "picurl" || platform === "bio" || platform === "profileID") ? true : false;
            if(isRestrictedPlatform || !profileObject[platform]) {
                continue;
            }
            outputToDOM += `<tr><td>${platform}</td><td>${profileObject[platform]}</td></tr>\n`
        }
        outputToDOM += `</table>\n`
        resolve(outputToDOM);
    })

    function grabProfile() {
        var untreatedIDArray = (window.location.toString()).split('/');
        var Id = untreatedIDArray[untreatedIDArray.length-1];
        fetch(IDGetUrl + Id)
        .then(res => {
            return res.json()
        })
        .then(renderProfileToDOMCode)
        .then(res => $('#profile').html(res))
        .catch(err => {return $('#title').text(err)})
    }

    if((window.location.toString()).includes(IDClientLink)) {
        grabProfile();
    }

    function grabProfileFromLocalStorage() {
        var id = localStorage.getItem('id');
        if(id){
            return fetch(IDGetUrl + id)
            .then(res => {
                return res.json();
            })
            .then(renderProfileToDOMCode)
            .then(res => $('#profile').html(res))
            .catch(err => {return $('#title').text(err)});
        } else {
            window.location = notFoundLink;
        }
    }

    if(window.location.href === viewProfileLink) {
        grabProfileFromLocalStorage();
    }

});