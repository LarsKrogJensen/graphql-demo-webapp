export default function () {

    var win = window;
    console.log("Location: " + win.location.origin);


    if (process.env.NODE_ENV === `development`) {
        return "http://localhost:8080";
    }
    else {
        return win.location.origin;
    }
}