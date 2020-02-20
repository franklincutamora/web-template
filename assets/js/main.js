(function () {
    /** Test Script */
    const headTag = $('head');
    const metaAuthor = $('meta[name=author');
    const author = "https://www.linkedin.com/in/franklin-cutamora";

    try {
        if (metaAuthor !== undefined) {
            metaAuthor.attr('content', author);
        } else {
            headTag.append('<meta name="author" content="' + author + '"/>');
        }
        console.log('Success: Script loaded.');
    } catch (error) {
        console.log(error);
    }
})();