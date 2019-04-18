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
            paidService: false,
            }
            ,'Shudder','Prime','Netflix'],
    subscriber: false,
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
var user = {
    name: string,
    age: number,
    email: string,
    subscriber: Boolean,
    favGenre:[string],
    favStations:[string,{
        callNumber: number,
        name: string,
        format: string,
        topPlaylist:[string],
        featuredArtists:[string],
        genre:string,
        paidService: Boolean,
        }],
    favSongs:[string],
    fa

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
var venue = {
    name: string,
    address: string,
    events:[string],
    openingTime:number,
    closingTime: number,
    coverCharge: number,
    }
// Example of Relationship
var user = {
    name: string,
    age: number,
    email: string,
    favArtists: [string],
    favVenues:[string,{
        name: string,
        address: string,
        events:[string],
        openingTime:number,
        closingTime: number,
        coverCharge: number,
        }],
    favGenre: [string],
    subscriber: Boolean,
    }

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

var sportsTeam = {
    name:string,
    city:string,
    owners:[sting],
    players:[string],
    staff:[string],
    game schedule:[string],
    }

// Example of Relationship

var user = {
    name: "Todd Barry"
    age:41,
    adress:"1982 Main St NW"
    city: "Philadelphia, PA"
    favSports:[football,hockey],
    favTeams:["Flyers",{
        name:"Eagles",
        city: "Philadelphia, PA",
        owners:["Jeffrey Lurie"]
        players:["Nick Foles", "Brian Dawkins","Fletcher Cox"],
        staff:["Doug Penderson"],
        game schedule:[string],
        }],
    favPlayers:['Nick Foles"],
    subscriber: true,
    }