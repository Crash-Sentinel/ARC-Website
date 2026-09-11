
fetch('version.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('website_version').textContent = data.version;
        document.getElementById('last_commit').textContent = data.lastCommit;
    })
    .catch(error => {
        document.getElementById('website_version').textContent = "ERROR IN FINDING RECENT VERSION";
        document.getElementById('last_commit').textContent = "ERROR IN FINDING LAST COMMIT";
        console.log(error);
    });