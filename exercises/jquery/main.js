const root = $('#root')

root
    .addClass('class-1')
    .removeClass('class-2')
    .toggleClass('class-3')
    .css({
        color: 'red',
        fontSize: '55px',
    })
    .on('click', () => null)
