import React from 'react'
import Header from './../components/header/Header'
import Footer from './../components/footer/Footer'
import PopularComponent from './../components/popular/PopularComponent'

const feedData = [
    {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    }, {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    },
    {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    }, {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    },
    {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    }, {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    },
    {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    }, {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    },
    {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    }, {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    },
    {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    }, {
        name: "Ida Warg",
        content: {
            source: "Twitter",
            time_stamp: "201810012033",
            tweet_text: "The best things in life are free, the second best are very, very expensive",
            tweet_img_url: "https://pbs.twimg.com/media/DoGZoooXgAACCV3.jpg",
            tweet_no_likes: "57",
            tweet_no_retweets: "4",
            tweet_hashtags: "#BALMAIN, #PFW18",
        }
    },
]


class Popular extends React.Component {


    render() {
        const FeedContent = Object.keys(feedData).map(key => {
            return <PopularComponent key={key} data={feedData[key]} />
        })

        return (
            <main>
                <Header />
                {FeedContent}
                <Footer />
            </main>
        )
    }
}

export default Popular