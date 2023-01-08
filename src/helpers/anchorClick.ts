import { MouseEvent } from 'react';
import Router from 'next/router';

const anchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = (e.target as HTMLAnchorElement).closest('a');
    const href = target.getAttribute('href');
    const anchor = document.querySelector(href);

    if(anchor) {
        anchor?.scrollIntoView({behavior: 'smooth'})
    } else {
        Router.push(`/${href}`);
    };

    e.preventDefault();
    e.stopPropagation();
}

export default anchorClick;