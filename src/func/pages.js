
export function createPages(pages, currentPage) {
    const pagesCount = 500;
    if(pagesCount > 10) {
        if(currentPage > 5) {
            for (let i = currentPage-4; i <= currentPage+5; i++) {
                pages.push(i)
                if(i === pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if(i === pagesCount) break
            }
        }
    }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}

export function colorG(genre){
    switch (genre){
        case 'Action':
            return 'blue';
        case 'Romance':
            return 'pink';
        case 'Fantasy':
            return 'mediumslateblue';
        case 'Comedy':
            return 'yellow';
        case 'Adventure':
            return 'aquamarine';
        case 'Science Fiction':
            return 'deepskyblue';
        case 'Mystery':
            return 'violet';
        case 'Animation':
            return 'greenyellow';
        case 'Crime':
            return 'crimson';
        case 'Documentary':
            return 'slategrey';
        case 'Drama':
            return 'tomato';
        case 'Family':
            return 'springgreen';
        case 'History':
            return 'sandybrown';
        case 'Horror':
            return 'cadetblue';
        case 'Music':
            return 'magenta';
        case 'TV Movie':
            return 'orange';
        case 'Thriller':
            return 'green';
        case 'War':
            return 'teal';
        case 'Western':
            return 'goldenrod';
        default:
            return 'white';
    }
}
