var bio = document.getElementById("asideBio");
var photo = document.getElementById("asidePhoto");
var erga = document.getElementById("asideErga");
var site = document.getElementById("asideSite");
var control = document.getElementById("asideControl");
var biography = document.getElementById("biography");
var pressbio = document.getElementById("pressbio");
var photosyoung = document.getElementById("photosyoung");
var photoscurrent = document.getElementById("photoscurrent");

function bioEnable(){

    photo.style.display = "none";
    erga.style.display = "none";
    site.style.display = "none";
    control.style.display = "none";
    bio.style.display = "block";
}
function photoEnable(){
    erga.style.display = "none";
    site.style.display = "none";
    control.style.display = "none";
    bio.style.display = "none";
    photo.style.display = "block";
}
function ergaEnable(){
    photo.style.display = "none";
    site.style.display = "none";
    control.style.display = "none";
    bio.style.display = "none";
    erga.style.display = "block";
}
function siteEnable(){
    photo.style.display = "none";
    erga.style.display = "none";
    control.style.display = "none";
    bio.style.display = "none";
    site.style.display = "block";
}
function controlEnable(){
    photo.style.display = "none";
    erga.style.display = "none";
    site.style.display = "none";
    bio.style.display = "none";
    control.style.display = "block";
}
function display1(){
    photoscurrent.style.display = "none";
    photosyoung.style.display = "none";
    pressbio.style.display = "none";
    jsonbooks.style.display = "none";
    jsonmovies.style.display = "none";
    biography.style.display = "block";
}
function display2(){
    photoscurrent.style.display = "none";
    photosyoung.style.display = "none";
    biography.style.display = "none";
    jsonbooks.style.display = "none";
    jsonmovies.style.display = "none";
    pressbio.style.display = "block";
}
function display3(){
    photoscurrent.style.display = "none";
    biography.style.display = "none";
    pressbio.style.display = "none";
    jsonbooks.style.display = "none";
    jsonmovies.style.display = "none";
    photosyoung.style.display = "block";
}
function display4(){
    biography.style.display = "none";
    pressbio.style.display = "none";
    jsonbooks.style.display = "none";
    photosyoung.style.display = "none";
    jsonmovies.style.display = "none";
    photoscurrent.style.display = "block";
}
function disableDisplayOnLoad() {
    bio = document.getElementById("asideBio");
    photo = document.getElementById("asidePhoto");
    erga = document.getElementById("asideErga");
    site = document.getElementById("asideSite");
    control = document.getElementById("asideControl");
    biography = document.getElementById("biography");
    pressbio = document.getElementById("pressbio");
    photosyoung = document.getElementById("photosyoung");
    photoscurrent = document.getElementById("photoscurrent")
    photosyoung.style.display = "none";
    photoscurrent.style.display = "none";
    photo.style.display = "none";
    erga.style.display = "none";
    site.style.display = "none";
    bio.style.display = "none";
    control.style.display = "none";
    biography.style.display = "none";
    pressbio.style.display = "none";
}
function getJSONDatamovies() {
    biography.style.display = "none";
    pressbio.style.display = "none";
    jsonbooks.style.display = "none";
    photosyoung.style.display = "none";
    photoscurrent.style.display = "none";
    jsonmovies.style.display = "block";
    fetch("movies.json", { method: "GET" })
    .then((res) => res.json())
    .then((json) => showJSONData((json)))
    .catch((err) => console.error("error:", err));
    }

function showJSONData(albums) {
    let anHTML = `<table><tr><th>title</th>
    <th>Title</th><th>year</th></tr>`
    for (let anAlbum of albums) {
    anHTML += "<tr><td>" +
    anAlbum.title + "</td><td>" +
    anAlbum.year + "</td><td>"
    }
    anHTML += "</table>";
    //Show table with albums
    document.getElementById("jsonmovies").innerHTML = anHTML;
}

function getJSONDatabooks() {
    biography.style.display = "none";
    pressbio.style.display = "none";
    photosyoung.style.display = "none";
    photoscurrent.style.display = "none";
    jsonmovies.style.display = "none";
    jsonbooks.style.display = "block";
    fetch("books.json", { method: "GET" })
    .then((res) => res.json())
    .then((json) => showJSONDatab((json)))
    .catch((err) => console.error("error:", err));
    }

function showJSONDatab(albums) {
    let anHTML = `<table><tr><th>title</th>
    <th>Title</th><th>year</th></tr>`
    for (let anAlbum of albums) {
    anHTML += "<tr><td>" +
    anAlbum.title + "</td><td>" +
    anAlbum.year + "</td><td>"
    }
    anHTML += "</table>";
    //Show table with albums
    document.getElementById("jsonbooks").innerHTML = anHTML;
}

window.onload = disableDisplayOnLoad;