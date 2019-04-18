// 1. Movie Streaming Tracker
var user = {
    name:string,
    age:number,
    email: string,
    favGenre:[string],
    favActors:[string],
    platforms:[string],
    subscriber:Boolean,
    } 

var platform = {
    name:string,
    format: string,
    genre:[string],
    movies:[string],
    otherContent:[string],
    paidService:Boolean
    }

// Example of Relationship
var user = {
    name:"Jon Dough",
    age: 36,
    email: "jdough@email.com",
    favGenre:['comedy','action','horror'],
    favActors:['Vin Diesel','Jason Statham','Dwayne Johnson'],
    platforms:[
        {
            name: 'Hulu',
            format: ['streaming','downloads','hosted'],
            genre:['comedy','drama','action','horror','documentary','reality','kids'],
            movies:['Get Out','Fast and the Furious','Iron Man'],
            otherContent:['Telvision','Documentary','Blog','Company News'],
            paidService: true,
            }
            ,'Shudder','Prime','Netflix'],
    subscriber: true,
    } 

// 2. Radio on the Internet app
var user = {
    name: string,
    age: number,
    email: string,
    subscriber: Boolean,
    favGenre:[string],
    favStations:[string],
    favSongs:[string],
    favArtists:[string],
    }


var radioStation = {
    callNumber: number,
    name: string,
    format: string,
    topPlaylist:[string],
    featuredArtists:[string],
    genre:string,
    paidService: Boolean,
    }
// Example of Relationship

// 3. Rock Concert App
var user = {
    name: string,
    age: number,
    email: string,
    favArtists: [string],
    favVenues:[string],
    favGenre: [string],
    subscriber: Boolean,
    }
var venue{

}

// Example of Relationship

// 4. Coffee To-Go App
var user = {
    name: string,
    age: number,
    email: string,
    favCoffeShop:[string],
    favoriteMenuItems:[string],
    favCoffeDrink:[string],
    }
var coffeShops = {
    name: string,
    adress: string,
    menuItems: [string],
    openingTime: number,
    closingTime: number,
    customers:[string]
}
// Example of Relationship
var coffeShops = {
    name: "Java Jones",
    address: "123 Main St NW",
    menuItems: ['coffee','tea','pastries','bottled drinks'],
    openingTime: 6,
    closingTime: 10,
    customers:['Sarah Bailey',{
        name: 'Slyvie Jameson',
        age: 25,
        email: 'slyvie@email.com',
        favCoffeShop:['Java Jones','Pike St Coffee'],
        favoriteMenuItems:['coffee','banana','breakfast oatmeal'],
        favCoffeDrink:['House Coffee','Iced Coffee']
        },
        'Skip Jones','Susie Bright','Sam Prater' ]
}

// 5. Team Tracker App
var user = {
name: string,
age:number,
adress:string,
city:string,
favSports:[string],
favTeams:[string],
favPlayers:[string],
subscriber:Boolean,
}

var sportsTeam{
name:
city:
}

// Example of Relationship