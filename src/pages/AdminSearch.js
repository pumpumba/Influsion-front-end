import React from 'react'
import SearchSuggestions from './../components/search/SearchSuggestions'
import AdminFooter from './../components/admin/AdminFooter'

class AdminSearch extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="admin-page-container">
                <header>
                    <h1>
                        inFlusion: Admin
                    </h1>
                </header>
                <div className='search-content'>
                    <SearchSuggestions />
                    <div className='info-text'>
                        Welcome to the searching feature, start typing and pick the influencer you are looking for!
                    </div>
                </div>
                <div>
                    <AdminFooter />
                </div>
            </div>
        )
    }
}

export default AdminSearch
