export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd03fce21b38b3da7da719b',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-s4k6yavh',
                  apiId: '94086379-ffaa-4b11-b492-32e72ab2adb1'
                },
                {
                  buildHookId: '5fd03fcfb5a336402a8e7a99',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-3qk6pfqq',
                  apiId: '10c81f87-b692-4a2f-8888-6885c9808ee7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/padunk/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-3qk6pfqq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
