function pictureIn ( item, seconds1, seconds2) {
setTimeout(() => {
    $(item).fadeIn(500)
}, seconds1);
setTimeout(() => {
    $(item).fadeOut(600)
}, seconds2);
}

pictureIn("#img1", 500, 7400)
pictureIn("#img2", 800, 7100)
pictureIn("#img3", 1100, 6800)
pictureIn("#img4", 1400, 6500)
pictureIn("#img5", 1700, 6200)
pictureIn("#img6", 2000, 5900)
pictureIn("#img7", 2300, 5600)
pictureIn("#img8", 2600, 5300)
pictureIn("#img9", 2900, 5000)
pictureIn("#img10", 3200, 4700)
pictureIn("#img11", 3500, 4400)
pictureIn("#img12", 3800, 4100)


