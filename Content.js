let catsPics = [
    "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    
    "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?cs=srgb&dl=pexels-peng-louis-1643457.jpg&fm=jpg",

    "https://wallpapers.com/images/featured/beautiful-cats-pictures-xwf07shnbxdspyde.jpg",

    "https://thumbs.dreamstime.com/b/four-cute-cats-20650677.jpg"
]

const imgs = document.querySelectorAll('img');

for (let i = 0; i < imgs.length; i++){
    const randomImage = Math.floor(Math.random() * catsPics.length) ;
    imgs[i].src = catsPics[randomImage]
}