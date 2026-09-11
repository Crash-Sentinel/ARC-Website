
fetch('version.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('website_version').textContent = data.version;
        document.getElementById('last_commit').textContent = data.lastCommit;

        document.getElementById('dff-version').textContent = data.dffVersion;
        document.getElementById('2-to-1-mux-version').textContent = data.twoToOneMUXVersion;
        document.getElementById('equality-checker-version').textContent = data.equalityCheckerVersion;
        document.getElementById('priority-encoder-version').textContent = data.priorityEncoderVersion;
        
        document.getElementById('one-to-two-demux-version').textContent = data.oneToTwoDEMUXVersion;
        document.getElementById('distributed-ram-version').textContent = data.distributedRAMVersion;

    })
    .catch(error => {
        document.getElementById('website_version').textContent = "ERROR IN FINDING RECENT VERSION";
        document.getElementById('last_commit').textContent = "ERROR IN FINDING LAST COMMIT";

        document.getElementById('dff-version').textContent = "ERROR";
        document.getElementById('2-to-1-mux-version').textContent = "ERROR";
        document.getElementById('equality-checker-version').textContent = "ERROR";
        document.getElementById('priority-encoder-version').textContent = "ERROR";
        
        console.log(error);
    });