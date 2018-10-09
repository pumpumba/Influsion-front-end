import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterButton from './FooterButton';

const FooterButton = () => {

    return (
        <div className="subFooter">
            <FooterButton link={'/'} icon={'star'} />
            <FooterButton link={'/feed'} icon={'heart'} />
            <FooterButton link={'/search'} icon={'search'} />
            <FooterButton link={'/settings'} icon={'cogs'} />
        </div>
    )
}

export default SubFooter