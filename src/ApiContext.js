import React from 'react';

const ApiContext = React.createContext({
  groups: [
    {
      id: 1,
      group_name: 'Algebra 1'
    },
    {
      id: 2,
      group_name: 'Geometry'
    },
    {
      id: 3,
      group_name: 'Algebra 2'
    },
    {
      id: 4,
      group_name: 'Intro to Data Science'
    }
  ],
  posts: [
    {
      id: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Curriculum changes',
      modified: '2019-01-03T00:00:00.000Z',
      groupId: 1,
      content:
        'Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.',
      author: 'Christine Yoo'
    },
    {
      id: 'd26e0034-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Project Based Learning Idea',
      modified: '2018-08-15T23:00:00.000Z',
      groupId: 2,
      content:
        'Eos laudantium quia ab blanditiis temporibus necessitatibus. Culpa et voluptas ut sed commodi. ',
      author: 'Nick Dequina'
    },
    {
      id: 'd26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Unit 5 Test Feedback Requested',
      modified: '2018-03-01T00:00:00.000Z',
      groupId: 3,
      content:
        'Occaecati dignissimos quam qui facere deserunt quia. Quaerat aut eos laudantium dolor odio officiis illum.',
      author: 'Esther Ishii'
    },
    {
      id: 'd26e0570-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Bring Nutrition Facts Labels!',
      modified: '2019-01-04T00:00:00.000Z',
      groupId: 4,
      content:
        'Eum culpa odit. Veniam porro molestiae dolores sunt reiciendis culpa. Atque accusamus dolore eos odio facilis.',
      author: 'David Gavrilovic'
    },
    {
      id: 'd26e0714-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Workshop on R Studio',
      modified: '2018-07-12T23:00:00.000Z',
      groupId: 4,
      content:
        'Distinctio dolor nihil ad iure quo tempore id ipsum. Doloremque sunt dicta odit. Id veritatis aut et doloremque natus.',
      author: 'Destiny Tadena'
    },
    {
      id: 'd26e0854-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Compasses needed',
      modified: '2018-08-20T23:00:00.000Z',
      groupId: 2,
      content:
        'Aliquid magnam ut quis quas impedit molestiae laudantium adipisci et. Officiis ut dolor rerum molestiae.',
      author: 'Christine Yoo'
    },
    {
      id: 'd26e0980-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Curriculum Updates for Geo',
      modified: '2018-03-03T00:00:00.000Z',
      groupId: 2,
      content:
        'Eaque aliquid sit. Ducimus consequatur nam. Corporis ut dolorum amet molestiae minima ut quasi nesciunt. Ad omnis et. Dolorem nemo id non voluptatem mollitia sit laudantium. Consequatur.',
      author: 'James Le'
    },
    {
      id: 'd26e0aac-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Cumulative Project Proposals',
      modified: '2018-05-16T23:00:00.000Z',
      groupId: 1,
      content:
        'Expedita mollitia et. Voluptates optio expedita. Esse ullam numquam quae rem. Cum esse itaque et.',
      author: 'Christine Yoo'
    },
    {
      id: 'd26e0bce-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Modifications to questions on CSA 2',
      modified: '2018-04-11T23:00:00.000Z',
      groupId: 3,
      content:
        'Rem enim voluptatem autem fuga possimus. Perferendis voluptatem labore vero veritatis laborum aspernatur molestiae.',
      author: 'Christine Yoo'
    },
    {
      id: 'd26e0f48-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'SBAC Interim Block Assessments',
      modified: '2018-04-26T23:00:00.000Z',
      groupId: 3,
      content:
        'Occaecati qui magni blanditiis. Et animi quas. Harum quo dolore quia nam amet numquam. Omnis et ex.',
      author: 'Jake Nguyen'
    },
    {
      id: 'd26e1074-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Graphing calculators request',
      modified: '2018-02-05T00:00:00.000Z',
      groupId: 3,
      content:
        'Tenetur deleniti vero. Qui et sit voluptatem et dolor voluptas. Aut adipisci autem dolorem ad excepturi ut facere.',
      author: 'Alfred Cardenas'
    },
    {
      id: 'd26e11a0-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Best practices for teaching transformations',
      modified: '2018-12-01T00:00:00.000Z',
      groupId: 1,
      content:
        'Tempore aliquam nobis amet dolor laborum aspernatur aspernatur. Non porro est mollitia nobis. Eveniet',
      author: 'Chuck Rah'
    },
    {
      id: 'd26e12c2-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'Standards for Mathematical practices in IDS',
      modified: '2018-09-11T23:00:00.000Z',
      groupId: 4,
      content:
        'Fugiat dolores et nostrum laborum id delectus sint reiciendis. Recusandae nulla repellendus. Labore',
      author: 'Anna Saad'
    },
    {
      id: 'd26e1452-ffaf-11e8-8eb2-f2801f1b9fd1',
      name: 'April 20 Meeting Summary',
      modified: '2018-08-13T23:00:00.000Z',
      groupId: 2,
      content:
        'Veritatis porro minima perspiciatis. Repellat veniam quo iste ut. Iusto voluptas quae quibusdam.',
      author: 'Teresa Dyson'
    }
  ],
  addPost: () => {},
  deletePost: () => {},
  updatePost: () => {},
  fetchPosts: () => {},
  fetchComments: () => {}
});

export default ApiContext;
