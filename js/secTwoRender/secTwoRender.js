let allCards = document.querySelector('.allCards');
const persons = [{
        fullName: "Ali Hurmat",
        artImage: "images/arts/imgOne.jpg",
        personImage: "images/persons/Hurmat.jpg",
        value: "0.32ETH",
        time: "1h 15m 32s"
    },
    {
        fullName: "Azhar Ali",
        artImage: "images/arts/imgTen.jpg",
        personImage: "images/persons/Azhar.png",
        value: "0.95ETH",
        time: "2h 24m 32s"
    },
    {
        fullName: "Babar Ali",
        artImage: "images/arts/imgSeven.jpg",
        personImage: "images/persons/Babar.jpg",
        value: "0.99ETH",
        time: "3h 31m 32s"
    },
    {
        fullName: "Didar Ali",
        artImage: "images/arts/imgFour.jpg",
        personImage: "images/persons/Didar.jpg",
        value: "0.43ETH",
        time: "4h 42m 32s"
    },
    {
        fullName: "Ibrar Khan",
        artImage: "images/arts/imgFive.jpg",
        personImage: "images/persons/Ibrar.jpg",
        value: "0.54ETH",
        time: "5h 56m 32s"
    },
    {
        fullName: "Israr Harry",
        artImage: "images/arts/imgSix.jpg",
        personImage: "images/persons/Israr.jpg",
        value: "0.65ETH",
        time: "6h 12m 32s"
    },
    {
        fullName: "Masroor Alam",
        artImage: "images/arts/imgEleven.jpg",
        personImage: "images/persons/Masroor.jpg",
        value: "0.83ETH",
        time: "7h 14m 32s"
    },
    {
        fullName: "Taighoon Shah",
        artImage: "images/arts/imgEight.jpg",
        personImage: "images/persons/Taighoon.jpg",
        value: "0.43ETH",
        time: "8h 15m 32s"
    },
];

const DispData = persons.map((data) => {
    return (
        `
        <div class="card">
        <div class="itemImg">
            <img src="${data.artImage}" alt="NFT Arts" class="art">
            <img src="${data.personImage}" alt="PersonOne" class="person">
        </div>
        <div class="itemText">
            <h2>${data.fullName}</h2>
            <div class="itemTextChild">
                <div>
                    <p>Auction Time</p>
                    <h3><span>${data.time}</span></h3>
                </div>
                <div>
                    <p>Current Bid : <span>${data.value}</span></p>
                    <h3><span>${data.time}</span></h3>
                </div>
            </div>
        </div>
        <button class="placeBidBtn">Place a Bid</button>
    </div>
    `
    )
});
allCards.innerHTML = DispData.join('');