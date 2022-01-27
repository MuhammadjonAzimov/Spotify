const library = [
    { name: "Artists" },
    { name: "Albums" },
    { name: "Podcasts" },
    { name: "Stations" },
    { name: "Liked Songs" },
    { name: "Playlists" }
]

const librarycontainer = document.querySelector(".library-box")

for (let names of library) {

    const p = document.createElement("p")

    const div = document.createElement("div")

    div.classList.add("librarytext")

    p.innerText = names.name

    div.append(p)

    librarycontainer.append(div)
}

const navigationname = [
    { name: "turn off the lights..." },
    { name: "Is it love?" },
    { name: "Is it raining?" },
    { name: " Workout" },
    { name: "Sad Vibes" },
    { name: "rtod" }
]

const navigation = document.querySelector(".navigation-box")

for (let names of navigationname) {

    const p = document.createElement("p")

    const div = document.createElement("div")

    div.classList.add("navigation-text")

    p.innerText = names.name

    div.append(p)

    navigation.append(div)
}