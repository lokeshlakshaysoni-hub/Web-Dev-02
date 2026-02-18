function login(email, pass, cb) {
    setTimeout(() => {
        cb({ userId: email, isLoggedIn: true, message: "Login successful" });
    }, 3000);
}

function getVideoDetails(cb) {
    setTimeout(() => {
        cb({ title: "Video Title", description: "Video Description", duration: "5 mins" });
    }, 2000);
}



function getVideolist(cb) {
    setTimeout(() => {
        cb(["video1", "video2", "video3"]);
    }, 4000);

}

login("user@example.com", "password", (userDetails) => {
    console.log(userDetails);
    getVideoList((videoList) => {
        console.log(videoList);
        getVideoDetails((videoDetails) => {
            console.log(videoDetails)
        })
    })
});
