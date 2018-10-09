import React, { Component } from 'react';
import FooterButton from './FooterButton';

const SubFooter = () => {

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