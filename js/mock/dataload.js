"use strict";
/*
 * Mock of API getUser:
 * Request: [GET] 
 * http://<server>/raflme/api/users/<userid>
 */
function getUser() {
  var userData = {
    "type": "userResponse",
    "errors": [],
    "model": {
        "created": "2015-06-28T18:34:35.686",
        "email": "javabilly@gmail.com",
        "firstName": "Billy",
        "gender": "m",
        "id": "5590a0ab49f02b1671f334a1",
        "lastName": "Truong",
        "password": "abcdef",
        "phone": "6266960069",
        "status": "active",
        "updated": "2015-06-28T20:59:02.712"
    }
  };
  return userData;
}

/*
 * Mock of API getOrganization:
 * Request: [GET] 
 * http://<server>/raflme/api/organizations/<orgid>
 */
function getOrganization() {
  var orgData = {
    "type": "organizationResponse",
    "errors": [],
    "model": {
        "address1": "1255 Pontenova Ave",
        "address2": "",
        "city": "Hacienda Heights",
        "country": "USA",
        "created": "2015-06-28T21:10:43.961",
        "id": "5590c54349f02b1795c4c377",
        "name": "Kids With a Chance",
        "state": "CA",
        "updated": "2015-06-28T21:15:46.592",
        "userId": "5590a0ab49f02b1671f334a1",
        "zipcode": "91745"
    }
  };
  return orgData;
}

/*
 * Mock of API getAdListing:
 * Request: [GET] 
 * http://<server>/raflme/api/listings/<listingid>
 */
function getAdListing() {
  var adData = {
    "type": "adListingResponse",
    "errors": [],
    "model": {
        "created": "2015-06-28T22:02:17.088",
        "description": "Giving away my Toyota Supra 2000 for a good cause.",
        "expiry": "2015-06-28T13:15:29.111",
        "id": "5590d15949f02b1795c4c378",
        "maxWinners": 2,
        "ownerId": "5590a0ab49f02b1671f334a1",
        "photoPaths": [
            "photo1.jpg",
            "photo2.jpg"
        ],
        "status": "new",
        "title": "Raffling my Car",
        "type": "raffle",
        "updated": "2015-06-28T22:12:05.486"
    }
  };
  return adData;
}

/*
 * Mock of API getAdListingEntry:
 * Request: [GET] 
 * http://<server>/raflme/api/listingEntries/<entryid>
 */
function getAdListingEntry() {
  var entryData = {
    "type": "adListingEntryResponse",
    "errors": [],
    "model": {
        "adListingId": "5590d15949f02b1795c4c378",
        "created": "2015-06-28T22:32:28.828",
        "id": "5590d86c49f02b1a1a8300b8",
        "organizationId": "5590c54349f02b1795c4c377",
        "price": 1,
        "updated": "2015-06-28T22:34:38.556",
        "userId": "5590a0ab49f02b1671f334a1",
        "winner": false
    }
  };
  return entryData;
}

/*
 * Mock of API getAdListingEntries:
 * Request: [GET] 
 * http://<server>/raflme/api/listingEntries?adListingId=<listingid>
 */
function getAdListingEntries() {
  var entriesData = {
    "type": "adListingEntryListResponse",
    "errors": [],
    "model": [
        {
            "adListingId": "5590d15949f02b1795c4c378",
            "created": "2015-06-28T22:31:50.116",
            "id": "5590d84649f02b1a1a8300b7",
            "organizationId": "5590c54349f02b1795c4c377",
            "price": 2,
            "updated": "2015-06-28T22:31:50.116",
            "userId": "5590a0ab49f02b1671f334a1",
            "winner": false
        },
        {
            "adListingId": "5590d15949f02b1795c4c378",
            "created": "2015-06-28T22:32:28.828",
            "id": "5590d86c49f02b1a1a8300b8",
            "organizationId": "5590c54349f02b1795c4c377",
            "price": 1,
            "updated": "2015-06-28T22:34:38.556",
            "userId": "5590a0ab49f02b1671f334a1",
            "winner": false
        },
        {
            "adListingId": "5590d15949f02b1795c4c378",
            "created": "2015-06-28T22:36:15.27",
            "id": "5590d94f49f02b1a1a8300b9",
            "organizationId": "5590c54349f02b1795c4c377",
            "price": 2,
            "updated": "2015-06-28T22:36:15.27",
            "userId": "5590a0ab49f02b1671f334a1",
            "winner": false
        }
    ]
  };
  return entriesData;
}
