module.exports = {
	title: 'Vue cheat sheet',
    description: 'It\'s a Vue stuff based on this repository https://github.com/dekadentno/vue-cheat-sheet',
    base:'/',
    markdown: {
        config: md => {
          md.set({ breaks: true })
      },
    },
    themeConfig:{
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Github', link: 'https://github.com/boussadjra/vue-cheat-sheet' },
          
        ],
        sidebar:  'auto'/*[
            {
                title: 'Guide',
                collapsable: true,
                children: [
            {text: 'Installation',link: '/guide/Installation'}
                ]
            }
            ]*/
    }
}
