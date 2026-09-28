
fetch('version.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('website_version').textContent = data.version;
        document.getElementById('last_commit').textContent = data.lastCommit;
        
        document.getElementById('decoder-version').textContent = data.twoFourDecoderVersion;
        document.getElementById('2-to-1-mux-version').textContent = data.twoOneMuxVersion;
        document.getElementById('dff-version').textContent = data.dffVersion;

    })
    .catch(error => {
        document.getElementById('website_version').textContent = "ERROR IN FINDING RECENT VERSION";
        document.getElementById('last_commit').textContent = "ERROR IN FINDING LAST COMMIT";

        document.getElementById('decoder-version').textContent = "ERROR IN FINDING TWO-TO-FOUR DECODER VERSION";
        document.getElementById('2-to-1-mux-version').textContent = "ERROR IN FINDING TWO-TO-ONE MUX VERSION";
        document.getElementById('dff-version').textContent = "ERROR IN FINDING DFF VERSION";        
        console.log(error);
    });