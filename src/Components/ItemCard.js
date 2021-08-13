import React, {useEffect, useState} from "react";
import './ItemCard.css';
import axios from "axios";


const listings = [
    {
        "id": "190012284722",
        "title": "US-SME Item 1117808525061367-1528852734885",
        "marketplace": "EBAY-US",
        "image": "https://thumbs.qa.ebaystatic.com/images/g/RZ0AAOSwKCtbIHEJ/s-l225.jpg",
        "imageDetails": {
            "md5": "mWig9V9wi3AS9TysIzXrW3A",
            "zoomGuid": "RZ0AAOSwKCtbIHEJ",
            "epsUrl": "http://i.qa.ebayimg.com/00/s/NTcwWDU3MA==/z/RZ0AAOSwKCtbIHEJ/$_0.JPG?set_id=880000500F"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 47,
                    "currency": "USD",
                    "normalizedValue": 4700
                }
            }
        },
        "categories": [
            {
                "id": 9355
            }
        ],
        "condition": "SELLER_REFURBISHED",
        "seller": {
            "id": 1357100724,
            "feedbackScore": 0,
            "level": 3,
            "feedbackPercentage": 0
        },
        "inventory": {
            "quantityLeft": 1625,
            "quantitySold": 6,
            "msku": true,
            "vacationHold": false
        }
    },
    {
        "id": "290025668610",
        "title": "0-FlatShipping Item1627869190692-1627869190692",
        "descriptionSecure": true,
        "marketplace": "EBAY-US",
        "startDate": {
            "ms": 1627869191000,
            "value": "2021-08-02T01:53:11.000Z"
        },
        "endDate": {
            "ms": 1630547591000,
            "value": "2021-09-02T01:53:11.000Z"
        },
        "image": "https://thumbs.qa.ebaystatic.com/images/g/ToAAAOSwMkBb~t32/s-l225.jpg",
        "imageDetails": {
            "md5": "mNtksmrZMUprZHiPsNNpWsQ",
            "zoomGuid": "ToAAAOSwMkBb~t32"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 10,
                    "currency": "USD",
                    "normalizedValue": 1000
                }
            }
        },
        "categories": [
            {
                "id": 12
            }
        ],
        "seller": {
            "id": 1332711149,
            "feedbackScore": 0,
            "level": 3,
            "feedbackPercentage": 55.55
        },
        "inventory": {
            "quantityLeft": 1,
            "quantitySold": 0,
            "msku": false,
            "vacationHold": false
        },
        "shipping": {
            "fast": false,
            "plus": false,
            "gsp": false,
            "mailingClass": 7
        },
        "promoted": {
            "campaignId": 10043904019,
            "bid": {
                "value": 0.7,
                "currency": "USD"
            },
            "bidValue": 0.7,
            "bidPercentage": 7,
            "advertisers": [
                {
                    "id": 0,
                    "campaignId": 10043904019,
                    "bidPercentage": 7
                }
            ],
            "startDate": {
                "ms": 1627869198000,
                "value": "2021-08-02T01:53:18.000Z"
            },
            "endDate": {
                "ms": 4294967295000,
                "value": "2106-02-07T06:28:15.000Z"
            },
            "visibilityStatus": 1,
            "type": "CPA"
        },
        "legal": {
            "okToShowInMerch": true,
            "adult": false
        },
        "watchCount": 0,
        "crossBorderTrade": false,
        "tax": {
            "rate": 0,
            "threshold": 0
        },
        "isAuthenticated": false,
        "cpcCampaignId": 0
    },
    {
        "id": "290025160706",
        "title": "0-FlatShipping Item1625799710555-1625799710555",
        "descriptionSecure": true,
        "marketplace": "EBAY-US",
        "startDate": {
            "ms": 1625799711000,
            "value": "2021-07-09T03:01:51.000Z"
        },
        "endDate": {
            "ms": 1631156511000,
            "value": "2021-09-09T03:01:51.000Z"
        },
        "image": "https://thumbs.qa.ebaystatic.com/images/g/ToAAAOSwMkBb~t32/s-l225.jpg",
        "imageDetails": {
            "md5": "mNtksmrZMUprZHiPsNNpWsQ",
            "zoomGuid": "ToAAAOSwMkBb~t32"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 10,
                    "currency": "USD",
                    "normalizedValue": 1000
                }
            }
        },
        "categories": [
            {
                "id": 12
            }
        ],
        "seller": {
            "id": 1332711149,
            "feedbackScore": 0,
            "level": 3,
            "feedbackPercentage": 55.55
        },
        "inventory": {
            "quantityLeft": 1,
            "quantitySold": 0,
            "msku": false,
            "vacationHold": false
        },
        "shipping": {
            "fast": false,
            "plus": false,
            "gsp": false,
            "mailingClass": 7
        },
        "promoted": {
            "campaignId": 10043904019,
            "bid": {
                "value": 0.5,
                "currency": "USD"
            },
            "bidValue": 0.5,
            "bidPercentage": 5,
            "advertisers": [
                {
                    "id": 0,
                    "campaignId": 10043904019,
                    "bidPercentage": 5
                }
            ],
            "startDate": {
                "ms": 1627331379000,
                "value": "2021-07-26T20:29:39.000Z"
            },
            "endDate": {
                "ms": 4294967295000,
                "value": "2106-02-07T06:28:15.000Z"
            },
            "visibilityStatus": 1,
            "type": "CPA"
        },
        "legal": {
            "okToShowInMerch": true,
            "adult": false
        },
        "watchCount": 0,
        "crossBorderTrade": false,
        "tax": {
            "rate": 0,
            "threshold": 0
        },
        "isAuthenticated": false,
        "sellerMarketingOfferMessage": "Extra 20% off with coupon",
        "cpcCampaignId": 0
    },
    {
        "id": "290023727104",
        "title": "0-FlatShipping Item1621734855415-1621734855415",
        "descriptionSecure": true,
        "marketplace": "EBAY-US",
        "startDate": {
            "ms": 1621734856000,
            "value": "2021-05-23T01:54:16.000Z"
        },
        "endDate": {
            "ms": 1629683656000,
            "value": "2021-08-23T01:54:16.000Z"
        },
        "image": "https://thumbs.qa.ebaystatic.com/images/g/ToAAAOSwMkBb~t32/s-l225.jpg",
        "imageDetails": {
            "md5": "mNtksmrZMUprZHiPsNNpWsQ",
            "zoomGuid": "ToAAAOSwMkBb~t32"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 10,
                    "currency": "USD",
                    "normalizedValue": 1000
                }
            }
        },
        "categories": [
            {
                "id": 12
            }
        ],
        "seller": {
            "id": 1332711149,
            "feedbackScore": 0,
            "level": 3,
            "feedbackPercentage": 55.55
        },
        "inventory": {
            "quantityLeft": 1,
            "quantitySold": 0,
            "msku": false,
            "vacationHold": false
        },
        "shipping": {
            "fast": false,
            "plus": false,
            "gsp": false,
            "mailingClass": 7
        },
        "promoted": {
            "campaignId": 10043904019,
            "bid": {
                "value": 0.5,
                "currency": "USD"
            },
            "bidValue": 0.5,
            "bidPercentage": 5,
            "advertisers": [
                {
                    "id": 0,
                    "campaignId": 10043904019,
                    "bidPercentage": 5
                }
            ],
            "startDate": {
                "ms": 1626388918000,
                "value": "2021-07-15T22:41:58.000Z"
            },
            "endDate": {
                "ms": 4294967295000,
                "value": "2106-02-07T06:28:15.000Z"
            },
            "visibilityStatus": 1,
            "type": "CPA"
        },
        "legal": {
            "okToShowInMerch": true,
            "adult": false
        },
        "watchCount": 0,
        "crossBorderTrade": false,
        "tax": {
            "rate": 0,
            "threshold": 0
        },
        "isAuthenticated": false,
        "cpcCampaignId": 0
    },
    {
        "id": "280030306305",
        "title": "0-FixedPrice Item1627900943307-1627900943307",
        "descriptionSecure": true,
        "marketplace": "EBAY-US",
        "startDate": {
            "ms": 1627900945000,
            "value": "2021-08-02T10:42:25.000Z"
        },
        "endDate": {
            "ms": 1630579345000,
            "value": "2021-09-02T10:42:25.000Z"
        },
        "image": "https://thumbs.qa.ebaystatic.com/images/g/wmoAAOSwK3thB8wY/s-l225.jpg",
        "imageDetails": {
            "md5": "my10Z7AcDGMzWXPo-V4JIiw",
            "zoomGuid": "wmoAAOSwK3thB8wY",
            "epsUrl": "https://i.qa.ebayimg.com/00/s/NDVYMTEw/z/wmoAAOSwK3thB8wY/$_0.GIF?set_id=8800004005"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 10,
                    "currency": "USD",
                    "normalizedValue": 1000
                }
            }
        },
        "categories": [
            {
                "id": 12
            }
        ],
        "seller": {
            "id": 2313516078,
            "feedbackScore": 100,
            "level": 3,
            "feedbackPercentage": 100
        },
        "inventory": {
            "quantityLeft": 1,
            "quantitySold": 0,
            "msku": false,
            "vacationHold": false
        },
        "shipping": {
            "fast": false,
            "plus": false,
            "gsp": false,
            "mailingClass": 2
        },
        "promoted": {
            "campaignId": 10115397018,
            "bid": {
                "value": 0.7,
                "currency": "USD"
            },
            "bidValue": 0.7,
            "bidPercentage": 7,
            "advertisers": [
                {
                    "id": 0,
                    "campaignId": 10115397018,
                    "bidPercentage": 7
                }
            ],
            "startDate": {
                "ms": 1627902226000,
                "value": "2021-08-02T11:03:46.000Z"
            },
            "endDate": {
                "ms": 4294967295000,
                "value": "2106-02-07T06:28:15.000Z"
            },
            "visibilityStatus": 1,
            "type": "CPA"
        },
        "legal": {
            "okToShowInMerch": true,
            "adult": false
        },
        "watchCount": 0,
        "crossBorderTrade": false,
        "tax": {
            "rate": 0,
            "threshold": 0
        },
        "isAuthenticated": false,
        "cpcCampaignId": 0
    },
    {
        "id": "280029712386",
        "title": "0-FixedPrice Item1626017710321-1626017710321",
        "descriptionSecure": true,
        "marketplace": "EBAY-US",
        "startDate": {
            "ms": 1626017710000,
            "value": "2021-07-11T15:35:10.000Z"
        },
        "endDate": {
            "ms": 1628696110000,
            "value": "2021-08-11T15:35:10.000Z"
        },
        "image": "https://thumbs.qa.ebaystatic.com/images/g/Bl4AAOSwlC1g6w-1/s-l225.jpg",
        "imageDetails": {
            "md5": "my10Z7AcDGMzWXPo-V4JIiw",
            "zoomGuid": "Bl4AAOSwlC1g6w-1",
            "epsUrl": "https://i.qa.ebayimg.com/00/s/NDVYMTEw/z/Bl4AAOSwlC1g6w-1/$_0.GIF?set_id=8800004005"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 10,
                    "currency": "USD",
                    "normalizedValue": 1000
                }
            }
        },
        "categories": [
            {
                "id": 12
            }
        ],
        "seller": {
            "id": 2313516078,
            "feedbackScore": 100,
            "level": 3,
            "feedbackPercentage": 100
        },
        "inventory": {
            "quantityLeft": 1,
            "quantitySold": 0,
            "msku": false,
            "vacationHold": false
        },
        "shipping": {
            "fast": false,
            "plus": false,
            "gsp": false,
            "mailingClass": 2
        },
        "promoted": {
            "campaignId": 10117745018,
            "bid": {
                "value": 1.2,
                "currency": "USD"
            },
            "bidValue": 1.2,
            "bidPercentage": 12,
            "advertisers": [
                {
                    "id": 0,
                    "campaignId": 10117745018,
                    "bidPercentage": 12
                }
            ],
            "startDate": {
                "ms": 1628353380000,
                "value": "2021-08-07T16:23:00.000Z"
            },
            "endDate": {
                "ms": 4294967295000,
                "value": "2106-02-07T06:28:15.000Z"
            },
            "visibilityStatus": 1,
            "type": "CPA"
        },
        "legal": {
            "okToShowInMerch": true,
            "adult": false
        },
        "watchCount": 0,
        "crossBorderTrade": false,
        "tax": {
            "rate": 0,
            "threshold": 0
        },
        "isAuthenticated": false,
        "cpcCampaignId": 0
    },
    {
        "id": "190016081921",
        "title": "US-SME Item 147140366582461-1591896269168",
        "descriptionSecure": true,
        "marketplace": "EBAY-US",
        "startDate": {
            "ms": 1591896270000,
            "value": "2020-06-11T17:24:30.000Z"
        },
        "endDate": {
            "ms": 1749756564000,
            "value": "2025-06-12T19:29:24.000Z"
        },
        "image": "https://thumbs.qa.ebaystatic.com/images/g/pycAAOSwkUZYYuEY/s-l225.jpg",
        "imageDetails": {
            "md5": "m6Q291XPZAJ-50PWc2oxK-A",
            "zoomGuid": "pycAAOSwkUZYYuEY"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 25,
                    "currency": "USD",
                    "normalizedValue": 2500
                }
            }
        },
        "categories": [
            {
                "id": 12
            }
        ],
        "seller": {
            "id": 1360509824,
            "feedbackScore": 1000,
            "level": 2,
            "feedbackPercentage": 100
        },
        "inventory": {
            "quantityLeft": 20,
            "quantitySold": 0,
            "msku": false,
            "vacationHold": false
        },
        "shipping": {
            "fast": false,
            "plus": false,
            "gsp": false,
            "mailingClass": 2
        },
        "promoted": {
            "campaignId": 10312215014,
            "bid": {
                "value": 4.25,
                "currency": "USD"
            },
            "bidValue": 4.25,
            "bidPercentage": 17,
            "advertisers": [
                {
                    "id": 0,
                    "campaignId": 10312215014,
                    "bidPercentage": 17
                }
            ],
            "startDate": {
                "ms": 1593211097000,
                "value": "2020-06-26T22:38:17.000Z"
            },
            "endDate": {
                "ms": 4294967295000,
                "value": "2106-02-07T06:28:15.000Z"
            },
            "visibilityStatus": 0,
            "type": "CPA"
        },
        "legal": {
            "okToShowInMerch": false,
            "adult": false
        },
        "watchCount": 0,
        "crossBorderTrade": false,
        "tax": {
            "rate": 0,
            "threshold": 0
        },
        "isAuthenticated": false,
        "cpcCampaignId": 0
    },
    {
        "id": "280030310401",
        "title": "0-FixedPrice Item1627918328694-1627918328694",
        "descriptionSecure": true,
        "marketplace": "EBAY-US",
        "startDate": {
            "ms": 1627918329000,
            "value": "2021-08-02T15:32:09.000Z"
        },
        "endDate": {
            "ms": 1630596729000,
            "value": "2021-09-02T15:32:09.000Z"
        },
        "image": "https://thumbs.qa.ebaystatic.com/images/g/zacAAOSwNDFhCA~9/s-l225.jpg",
        "imageDetails": {
            "md5": "my10Z7AcDGMzWXPo-V4JIiw",
            "zoomGuid": "zacAAOSwNDFhCA~9",
            "epsUrl": "https://i.qa.ebayimg.com/00/s/NDVYMTEw/z/zacAAOSwNDFhCA~9/$_0.GIF?set_id=8800004005"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 10,
                    "currency": "USD",
                    "normalizedValue": 1000
                }
            }
        },
        "categories": [
            {
                "id": 12
            }
        ],
        "seller": {
            "id": 2313516078,
            "feedbackScore": 100,
            "level": 3,
            "feedbackPercentage": 100
        },
        "inventory": {
            "quantityLeft": 1,
            "quantitySold": 0,
            "msku": false,
            "vacationHold": false
        },
        "shipping": {
            "fast": false,
            "plus": false,
            "gsp": false,
            "mailingClass": 2
        },
        "promoted": {
            "campaignId": 10115397018,
            "bid": {
                "value": 0.7,
                "currency": "USD"
            },
            "bidValue": 0.7,
            "bidPercentage": 7,
            "advertisers": [
                {
                    "id": 0,
                    "campaignId": 10115397018,
                    "bidPercentage": 7
                }
            ],
            "startDate": {
                "ms": 1627918376000,
                "value": "2021-08-02T15:32:56.000Z"
            },
            "endDate": {
                "ms": 4294967295000,
                "value": "2106-02-07T06:28:15.000Z"
            },
            "visibilityStatus": 1,
            "type": "CPA"
        },
        "legal": {
            "okToShowInMerch": true,
            "adult": false
        },
        "watchCount": 0,
        "crossBorderTrade": false,
        "tax": {
            "rate": 0,
            "threshold": 0
        },
        "isAuthenticated": false,
        "cpcCampaignId": 0
    },
    {
        "id": "280029939713",
        "title": "0-FixedPrice Item1626742082507-1626742082507",
        "descriptionSecure": true,
        "marketplace": "EBAY-US",
        "startDate": {
            "ms": 1626742083000,
            "value": "2021-07-20T00:48:03.000Z"
        },
        "endDate": {
            "ms": 1629420483000,
            "value": "2021-08-20T00:48:03.000Z"
        },
        "image": "https://thumbs.qa.ebaystatic.com/images/g/OxYAAOSw~3tg9h1K/s-l225.jpg",
        "imageDetails": {
            "md5": "my10Z7AcDGMzWXPo-V4JIiw",
            "zoomGuid": "OxYAAOSw~3tg9h1K",
            "epsUrl": "https://i.qa.ebayimg.com/00/s/NDVYMTEw/z/OxYAAOSw~3tg9h1K/$_0.GIF?set_id=8800004005"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 10,
                    "currency": "USD",
                    "normalizedValue": 1000
                }
            }
        },
        "categories": [
            {
                "id": 12
            }
        ],
        "seller": {
            "id": 2313516078,
            "feedbackScore": 100,
            "level": 3,
            "feedbackPercentage": 100
        },
        "inventory": {
            "quantityLeft": 1,
            "quantitySold": 0,
            "msku": false,
            "vacationHold": false
        },
        "shipping": {
            "fast": false,
            "plus": false,
            "gsp": false,
            "mailingClass": 2
        },
        "promoted": {
            "campaignId": 10115397018,
            "bid": {
                "value": 0.5,
                "currency": "USD"
            },
            "bidValue": 0.5,
            "bidPercentage": 5,
            "advertisers": [
                {
                    "id": 0,
                    "campaignId": 10115397018,
                    "bidPercentage": 5
                }
            ],
            "startDate": {
                "ms": 1627330571000,
                "value": "2021-07-26T20:16:11.000Z"
            },
            "endDate": {
                "ms": 4294967295000,
                "value": "2106-02-07T06:28:15.000Z"
            },
            "visibilityStatus": 1,
            "type": "CPA"
        },
        "legal": {
            "okToShowInMerch": true,
            "adult": false
        },
        "watchCount": 0,
        "crossBorderTrade": false,
        "tax": {
            "rate": 0,
            "threshold": 0
        },
        "isAuthenticated": false,
        "cpcCampaignId": 0
    },
    {
        "id": "280029800449",
        "title": "0-FixedPrice Item1626309769575-1626309769575",
        "descriptionSecure": true,
        "marketplace": "EBAY-US",
        "startDate": {
            "ms": 1626309770000,
            "value": "2021-07-15T00:42:50.000Z"
        },
        "endDate": {
            "ms": 1628988170000,
            "value": "2021-08-15T00:42:50.000Z"
        },
        "image": "https://thumbs.qa.ebaystatic.com/images/g/MK4AAOSw5xRg74Sb/s-l225.jpg",
        "imageDetails": {
            "md5": "my10Z7AcDGMzWXPo-V4JIiw",
            "zoomGuid": "MK4AAOSw5xRg74Sb",
            "epsUrl": "https://i.qa.ebayimg.com/00/s/NDVYMTEw/z/MK4AAOSw5xRg74Sb/$_0.GIF?set_id=8800004005"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 10,
                    "currency": "USD",
                    "normalizedValue": 1000
                }
            }
        },
        "categories": [
            {
                "id": 12
            }
        ],
        "seller": {
            "id": 2313516078,
            "feedbackScore": 100,
            "level": 3,
            "feedbackPercentage": 100
        },
        "inventory": {
            "quantityLeft": 1,
            "quantitySold": 0,
            "msku": false,
            "vacationHold": false
        },
        "shipping": {
            "fast": false,
            "plus": false,
            "gsp": false,
            "mailingClass": 2
        },
        "promoted": {
            "campaignId": 10089211018,
            "bid": {
                "value": 0.5,
                "currency": "USD"
            },
            "bidValue": 0.5,
            "bidPercentage": 5,
            "advertisers": [
                {
                    "id": 0,
                    "campaignId": 10089211018,
                    "bidPercentage": 5
                }
            ],
            "startDate": {
                "ms": 1627331263000,
                "value": "2021-07-26T20:27:43.000Z"
            },
            "endDate": {
                "ms": 4294967295000,
                "value": "2106-02-07T06:28:15.000Z"
            },
            "visibilityStatus": 1,
            "type": "CPA"
        },
        "legal": {
            "okToShowInMerch": true,
            "adult": false
        },
        "watchCount": 0,
        "crossBorderTrade": false,
        "tax": {
            "rate": 0,
            "threshold": 0
        },
        "isAuthenticated": false,
        "cpcCampaignId": 0
    },
    {
        "id": "280030168065",
        "title": "0-FixedPrice Item1627439640711-1627439640711",
        "descriptionSecure": true,
        "marketplace": "EBAY-US",
        "startDate": {
            "ms": 1627439641000,
            "value": "2021-07-28T02:34:01.000Z"
        },
        "endDate": {
            "ms": 1630118041000,
            "value": "2021-08-28T02:34:01.000Z"
        },
        "image": "https://thumbs.qa.ebaystatic.com/images/g/WosAAOSwUBFhAMIe/s-l225.jpg",
        "imageDetails": {
            "md5": "my10Z7AcDGMzWXPo-V4JIiw",
            "zoomGuid": "WosAAOSwUBFhAMIe",
            "epsUrl": "https://i.qa.ebayimg.com/00/s/NDVYMTEw/z/WosAAOSwUBFhAMIe/$_0.GIF?set_id=8800004005"
        },
        "formats": {
            "fixedPrice": {
                "amount": {
                    "value": 10,
                    "currency": "USD",
                    "normalizedValue": 1000
                }
            }
        },
        "categories": [
            {
                "id": 12
            }
        ],
        "seller": {
            "id": 2313516078,
            "feedbackScore": 100,
            "level": 3,
            "feedbackPercentage": 100
        },
        "inventory": {
            "quantityLeft": 1,
            "quantitySold": 0,
            "msku": false,
            "vacationHold": false
        },
        "shipping": {
            "fast": false,
            "plus": false,
            "gsp": false,
            "mailingClass": 2
        },
        "promoted": {
            "campaignId": 10115397018,
            "bid": {
                "value": 0.5,
                "currency": "USD"
            },
            "bidValue": 0.5,
            "bidPercentage": 5,
            "advertisers": [
                {
                    "id": 0,
                    "campaignId": 10115397018,
                    "bidPercentage": 5
                }
            ],
            "startDate": {
                "ms": 1627440989000,
                "value": "2021-07-28T02:56:29.000Z"
            },
            "endDate": {
                "ms": 4294967295000,
                "value": "2106-02-07T06:28:15.000Z"
            },
            "visibilityStatus": 1,
            "type": "CPA"
        },
        "legal": {
            "okToShowInMerch": true,
            "adult": false
        },
        "watchCount": 0,
        "crossBorderTrade": false,
        "tax": {
            "rate": 0,
            "threshold": 0
        },
        "isAuthenticated": false,
        "cpcCampaignId": 0
    }
]


function ItemCard() {

    const url = 'http://10.148.160.194:8080/castlemock/mock/rest/project/jjb4uz/application/39j30V/getsimiliaritems';
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response)
                // console.log("data: ", response.data.listings)
                setItems(response.data.listings)
            })
    }, [])

    return (
        <div className="container mt-4 mb-4">
            {
                listings.map((listing, index) =>
                    <React.Fragment>
                        <div className="row pt-2" key={listing.id}>
                            <div className="col-2">
                                <img src="https://i.ebayimg.com/images/g/s7wAAOSwbQBhEFAN/s-l500.jpg"
                                     className="item-card-image" alt="test image"/>
                            </div>
                            <div className="col-10 content-listing">
                                <strong>{listing.title}</strong>
                                <div className="text-muted">
                                    8000 + Feedback Every day low prices & Great services
                                </div>
                                <div className="text-muted">
                                    Pre-owned
                                </div>
                                <div className="price">
                                    $484
                                </div>
                                <div className="text-muted">
                                    Buy it now
                                </div>
                                <div className="free-charge">
                                    Free 4 days shippings
                                </div>
                                <div className="text-muted">
                                    Free returns
                                </div>
                                <div className="text-watchers">
                                    23 + watchers
                                </div>
                            </div>
                        </div>
                        {index === (listings.length - 1) ? "" : <hr className="text-muted"/>}
                    </React.Fragment>
                )
            }
        </div>
    )
}

export default ItemCard