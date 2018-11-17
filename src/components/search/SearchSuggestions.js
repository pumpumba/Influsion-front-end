import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchSuggestions extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                searchResults: []
            }
        this.onChange = this.onChange.bind(this)
        this.checkForInfluencer = this.checkForInfluencer.bind(this)
    }
    
    checkForInfluencer(searchString) {
        const influData = [
            {
                "influencername": "Bill Gates",
                "realname": "Bill Gates",
                "inflid": 1,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "BillG",
                            "platform": "instagram"
                        },
                        {
                            "actname": "BillGates",
                            "platform": "twitter"
                        },
                        {
                            "actname": "thegatesnotes",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": true
            },
            {
                "influencername": "Jockiboi",
                "realname": "Joakim Lundell",
                "inflid": 2,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "Jockiboi",
                            "platform": "instagram"
                        }
                    ]
                },
                "usrfollowinginfluencer": true
            },
            {
                "influencername": "Gary Vaynerchuck",
                "realname": null,
                "inflid": 3,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "garyvee",
                            "platform": "twitter"
                        },
                        {
                            "actname": "garyvee",
                            "platform": "instagram"
                        },
                        {
                            "actname": "GaryVaynerchuk",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Joe Rogan",
                "realname": null,
                "inflid": 4,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "joerogan",
                            "platform": "twitter"
                        },
                        {
                            "actname": "joerogan",
                            "platform": "instagram"
                        },
                        {
                            "actname": "PowerfulJRE",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Kylie Jenner",
                "realname": null,
                "inflid": 5,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "KylieJenner",
                            "platform": "twitter"
                        },
                        {
                            "actname": "Kylie Jenner",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Martin Larsson",
                "realname": null,
                "inflid": 6,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "RekklesLoL",
                            "platform": "twitter"
                        },
                        {
                            "actname": "Rekkles",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Kenza",
                "realname": null,
                "inflid": 7,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "Kenza Zouiten Subosic",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Margaux Dietz",
                "realname": null,
                "inflid": 8,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "margauxdietz",
                            "platform": "instagram"
                        },
                        {
                            "actname": "Margaux dietz",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Isabella Jedler",
                "realname": null,
                "inflid": 9,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "isabellajedler",
                            "platform": "instagram"
                        },
                        {
                            "actname": "Isabella Jedler",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Jon Olsson",
                "realname": null,
                "inflid": 10,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "JonOlsson",
                            "platform": "twitter"
                        },
                        {
                            "actname": "JonOlssonVideoBlog",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Janni Olsson Delér",
                "realname": null,
                "inflid": 11,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "JanniDeler",
                            "platform": "twitter"
                        },
                        {
                            "actname": "Janni Olsson Deler",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Anna Nyström",
                "realname": null,
                "inflid": 12,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "AnnaNystromT",
                            "platform": "twitter"
                        },
                        {
                            "actname": "annanystrom",
                            "platform": "instagram"
                        },
                        {
                            "actname": "Anna Nyström",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Felix Kjellberg",
                "realname": null,
                "inflid": 13,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "pewdiepie",
                            "platform": "twitter"
                        },
                        {
                            "actname": "PewDiePie",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Marzia Bisognin",
                "realname": null,
                "inflid": 14,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "marziapie",
                            "platform": "twitter"
                        },
                        {
                            "actname": "CutiePieMarzia",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Dalai Lama",
                "realname": null,
                "inflid": 15,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "DalaiLama",
                            "platform": "twitter"
                        },
                        {
                            "actname": "Dalai Lama",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Marques Brownlee",
                "realname": null,
                "inflid": 16,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "MKBHD",
                            "platform": "twitter"
                        },
                        {
                            "actname": "mkbhd",
                            "platform": "instagram"
                        },
                        {
                            "actname": "marquesbrownlee",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Lewis Hilsenteger",
                "realname": null,
                "inflid": 17,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "UnboxTherapy",
                            "platform": "twitter"
                        },
                        {
                            "actname": "unboxtherapy",
                            "platform": "instagram"
                        },
                        {
                            "actname": "unboxtherapy",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Mark Hamill",
                "realname": null,
                "inflid": 18,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "HamillHimself",
                            "platform": "twitter"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Justine Ezarik",
                "realname": null,
                "inflid": 19,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "ijustine",
                            "platform": "twitter"
                        },
                        {
                            "actname": "ijustine",
                            "platform": "instagram"
                        },
                        {
                            "actname": "ijustine",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Casey Neistat",
                "realname": null,
                "inflid": 20,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "CaseyNeistat",
                            "platform": "twitter"
                        },
                        {
                            "actname": "CaseyNeistat",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Pope Francis",
                "realname": null,
                "inflid": 21,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "Pontifex",
                            "platform": "twitter"
                        },
                        {
                            "actname": "The Pope Video",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Gordon Ramsay",
                "realname": null,
                "inflid": 22,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "gordonramsay",
                            "platform": "twitter"
                        },
                        {
                            "actname": "gordonramsay",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Jimmy Chin",
                "realname": null,
                "inflid": 23,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "jimkchin",
                            "platform": "twitter"
                        },
                        {
                            "actname": "jimmy_chin",
                            "platform": "instagram"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Justin Bieber",
                "realname": null,
                "inflid": 24,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "justinbieber",
                            "platform": "twitter"
                        },
                        {
                            "actname": "Justin Bieber",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Donald Trump",
                "realname": null,
                "inflid": 25,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "realDonaldTrump",
                            "platform": "twitter"
                        },
                        {
                            "actname": "Donald Trump Official",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Barack Obama",
                "realname": null,
                "inflid": 26,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "BarackObama",
                            "platform": "twitter"
                        },
                        {
                            "actname": "BarackObamadotcom",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Sandra Beijer",
                "realname": null,
                "inflid": 28,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "niotillfem",
                            "platform": "twitter"
                        },
                        {
                            "actname": "Sandra Beijer",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Alexander Pärleros",
                "realname": null,
                "inflid": 29,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "parleros",
                            "platform": "twitter"
                        },
                        {
                            "actname": "alexanderparleros",
                            "platform": "instagram"
                        },
                        {
                            "actname": "Alexander Pärleros",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Mattias Hargin",
                "realname": null,
                "inflid": 30,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "mattiashargin",
                            "platform": "twitter"
                        },
                        {
                            "actname": "mattiashargin",
                            "platform": "instagram"
                        },
                        {
                            "actname": "Mattias Hargin",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Bianca Ingrosso",
                "realname": null,
                "inflid": 31,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "biancaingrosso",
                            "platform": "twitter"
                        },
                        {
                            "actname": "biancaingrosso",
                            "platform": "instagram"
                        },
                        {
                            "actname": "Bianca Ingrosso",
                            "platform": "youtube"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Fredrik Wikingsson",
                "realname": null,
                "inflid": 32,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "fwikingsson",
                            "platform": "twitter"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            },
            {
                "influencername": "Filip Hammar",
                "realname": null,
                "inflid": 33,
                "pfaccs": {
                    "platformaccounts": [
                        {
                            "actname": "PodFF",
                            "platform": "twitter"
                        }
                    ]
                },
                "usrfollowinginfluencer": false
            }
        ]

        let searchResults = []
        let found = false

        for (let i=0 ; i < influData.length ; i++){
            if (influData[i]['influencername'].toLowerCase().startsWith(searchString.toLowerCase())) {
                searchResults.push(influData[i])
                found = true
            }
            
            if (!found) {
                for(let j=0; j < influData[i]['pfaccs']['platformaccounts'].length; j++) {
                    if (influData[i]['pfaccs']['platformaccounts'][j]['actname'].toLowerCase().startsWith(searchString.toLowerCase())) {
                        searchResults.push(influData[i])
                        found = false
                        break
                    }
                }
            }
        }
        if (searchString==="")
            return []
        
        return searchResults
    }
    onChange(searchString) {
        this.setState({searchResults: this.checkForInfluencer(searchString)})
    }
  
    
      
        

    
    render() {
        let feedContent = null
        if (this.state.searchResults.length > 0) {
            let influencerName = []
            for (let i=0; i < this.state.searchResults.length; i++) {
                influencerName.push(this.state.searchResults[i].influencername)
            }
            feedContent = influencerName.map(curContent => {
                return <h1>{curContent}</h1>
            })
        }
        return (
            <form className='search-input-wrapper'>
                <input
                    onChange={(e) => this.onChange( e.target.value )}
                    className='searchInput'
                    placeholder="Search"
                />
                <button >
                    <FontAwesomeIcon icon={'search'} />
                </button>
                {feedContent}
            </form>            
        )
    }
}

export default SearchSuggestions
