import React, { Component } from 'react';
import './Posts.css';
import Post from '../../Molecules/Post/Post.js';

class Posts extends Component {
  renderPosts = () => {
    const posts = [
      {
        id: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Curriculum changes',
        modified: '2019-01-03T00:00:00.000Z',
        groupId: 1,
        content:
          'Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad.',
        author: 'Chris Yoo'
      },
      {
        id: 'd26e0034-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Project Based Learning Idea',
        modified: '2018-08-15T23:00:00.000Z',
        groupId: 2,
        content:
          'Eos laudantium quia ab blanditiis temporibus necessitatibus. Culpa et voluptas ut sed commodi. Est qui ducimus id. Beatae sint aspernatur error ullam quae illum sint eum. Voluptas corrupti praesentium soluta cumque illo impedit vero omnis nisi.Quasi voluptas qui nulla. Iure quas veniam aut quia et.',
        author: 'Nick Dequina'
      },
      {
        id: 'd26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Unit 5 Test Feedback Requested',
        modified: '2018-03-01T00:00:00.000Z',
        groupId: 3,
        content:
          'Occaecati dignissimos quam qui facere deserunt quia. Quaerat aut eos laudantium dolor odio officiis illum. Velit vel qui dolorem et. At id deserunt voluptatem et rerum. Voluptatem fuga tempora aut dignissimos est odio maiores illo. Fugiat in ad expedita voluptas voluptatum nihil.',
        author: 'Esther Ishii'
      },
      {
        id: 'd26e0570-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Bring Nutrition Facts Labels!',
        modified: '2019-01-04T00:00:00.000Z',
        groupId: 4,
        content:
          'Eum culpa odit. Veniam porro molestiae dolores sunt reiciendis culpa. Atque accusamus dolore eos odio facilis. Dolores reprehenderit et provident dolores possimus mollitia.',
        author: 'David Gavrilovic'
      },
      {
        id: 'd26e0714-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Workshop on R Studio',
        modified: '2018-07-12T23:00:00.000Z',
        groupId: 4,
        content:
          'Distinctio dolor nihil ad iure quo tempore id ipsum. Doloremque sunt dicta odit. Id veritatis aut et doloremque natus.Cupiditate quos minus laudantium autem eum quas tempore. Eos quibusdam quibusdam. Voluptatem molestiae qui accusamus blanditiis voluptates quia.',
        author: 'Destiny Tadena'
      },
      {
        id: 'd26e0854-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Compasses needed',
        modified: '2018-08-20T23:00:00.000Z',
        groupId: 2,
        content:
          'Aliquid magnam ut quis quas impedit molestiae laudantium adipisci et. Officiis ut dolor rerum molestiae. Natus rerum libero aperiam. Rem aut consequatur. Quas soluta modi rerum id qui quis et voluptatem perferendis.',
        author: 'Megan Tran'
      },
      {
        id: 'd26e0980-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Curriculum Updates for Geo',
        modified: '2018-03-03T00:00:00.000Z',
        groupId: 2,
        content:
          'Eaque aliquid sit. Ducimus consequatur nam. Corporis ut dolorum amet molestiae minima ut quasi nesciunt. Ad omnis et. Dolorem nemo id non voluptatem mollitia sit laudantium. Consequatur quia consequuntur praesentium perferendis alias molestiae voluptatem qui temporibus. Sed nostrum et veniam id hic voluptatem inventore quo. Ipsam officiis unde dolor eum est dolores qui itaque aspernatur. Magnam aliquam qui qui.',
        author: 'James Le'
      },
      {
        id: 'd26e0aac-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Cumulative Project Proposals',
        modified: '2018-05-16T23:00:00.000Z',
        groupId: 1,
        content:
          'Expedita mollitia et. Voluptates optio expedita. Esse ullam numquam quae rem. Cum esse itaque et. Corrupti nam illum debitis ipsa excepturi neque rem totam. Repellendus consequatur qui itaque distinctio ut esse ut est. Omnis assumenda non. Distinctio voluptas ea fugit corporis. Maiores et occaecati.',
        author: 'Chris Yoo'
      },
      {
        id: 'd26e0bce-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Modifications to questions on CSA 2',
        modified: '2018-04-11T23:00:00.000Z',
        groupId: 3,
        content:
          'Rem enim voluptatem autem fuga possimus. Perferendis voluptatem labore vero veritatis laborum aspernatur molestiae. Enim et quibusdam harum ab velit ad occaecati. Incidunt repellendus quidem rem quia quasi veritatis reiciendis. Quas omnis nam. Quo quisquam occaecati deleniti reiciendis quo temporibus cupiditate consequatur.',
        author: 'Chris Yoo'
      },
      {
        id: 'd26e0f48-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'SBAC Interim Block Assessments',
        modified: '2018-04-26T23:00:00.000Z',
        groupId: 3,
        content:
          'Occaecati qui magni blanditiis. Et animi quas. Harum quo dolore quia nam amet numquam. Omnis et ex numquam et nostrum dolores voluptatibus. Ut dolores qui voluptatibus. Debitis fuga similique sapiente est perspiciatis. Corrupti aut exercitationem eveniet sunt.',
        author: 'Jake Nguyen'
      },
      {
        id: 'd26e1074-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Graphing calculators request',
        modified: '2018-02-05T00:00:00.000Z',
        groupId: 3,
        content:
          'Tenetur deleniti vero. Qui et sit voluptatem et dolor voluptas. Aut adipisci autem dolorem ad excepturi ut facere. Eligendi velit dicta enim omnis.',
        author: 'Alfred Cardenas'
      },
      {
        id: 'd26e11a0-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Best practices for teaching transformations',
        modified: '2018-12-01T00:00:00.000Z',
        groupId: 1,
        content:
          'Tempore aliquam nobis amet dolor laborum aspernatur aspernatur. Quae et distinctio sequi dolorem temporibus aliquid.',
        author: 'Chuck Rah'
      },
      {
        id: 'd26e12c2-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'Standards for Mathematical practices in IDS',
        modified: '2018-09-11T23:00:00.000Z',
        groupId: 4,
        content:
          'Fugiat dolores et nostrum laborum id delectus sint reiciendis. Recusandae nulla repellendus. Labore eum hic nesciunt enim corporis necessitatibus. Iusto pariatur aut qui blanditiis. Dolor optio sed alias excepturi delectus aut consequuntur veniam nemo.',
        author: 'Anna Saad'
      },
      {
        id: 'd26e1452-ffaf-11e8-8eb2-f2801f1b9fd1',
        name: 'April 20 Meeting Summary',
        modified: '2018-08-13T23:00:00.000Z',
        groupId: 2,
        content:
          'Sed itaque ipsam nam provident aut voluptate. Perferendis repudiandae sequi laudantium est est animi eum. Unde alias et doloribus est hic et. Sed distinctio incidunt maiores aut voluptatibus et omnis mollitia fugit.',
        author: 'Teresa Dyson'
      }
    ];

    if (this.props.isOnDash) {
      return posts
        .filter((post) => post.author === 'Chris Yoo')
        .map((post) => {
          return (
            <Post
              author={post.author}
              content={post.content}
              modified={post.modified}
              id={post.id}
              groupId={post.groupId}
              name={post.name}
            />
          );
        });
    } else if (this.props.isOnGroup) {
      return posts
        .filter((post) => post.groupId === +this.props.groupId)
        .map((post) => {
          return (
            <Post
              author={post.author}
              content={post.content}
              modified={post.modified}
              id={post.id}
              groupId={post.groupId}
              name={post.name}
            />
          );
        });
    }

    return posts.map((post) => {
      return (
        <Post
          author={post.author}
          content={post.content}
          modified={post.modified}
          id={post.id}
          groupId={post.groupId}
          name={post.name}
        />
      );
    });
  };

  render() {
    return <>{this.renderPosts()}</>;
  }
}

export default Posts;
