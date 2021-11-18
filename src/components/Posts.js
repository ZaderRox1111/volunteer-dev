import '../css/Posts.css';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { listRequests } from '../graphql/queries.js';
import Masonry from 'react-masonry-css';

import Post from '../components/Post.js';

function Posts() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const requestsData = await API.graphql(graphqlOperation(listRequests));
      const requestsList = requestsData.data.listRequests.items;

      console.log('Requests list:', requestsList);
      setRequests(requestsList);

    } catch (error) {
      console.error('Error fetching requests list. ', error);
    }
  }

  const breakpoints = {
    default: 4,
    1536: 3,
    1200: 2,
    600: 1
  }

  return (
    <div className='allposts'>
      <div className='container'>
        <div id='header'>Search for posts here!</div>
        <main id='main'>
          <Masonry
            breakpointCols={breakpoints}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {requests.map(request => {
              return <Post
                title={request.title}
                tags={request.tags}
                description={request.description}
                key={request.id}
              />
            })}

            <Post title="Request" description='Description' tags={[]} />
            <Post title="Really Long Title Cuz Why Not" description='Description' tags={['tag', 'tag 2']} />
            <Post title="Request" description='Description' tags={[]} />
            <Post title="Request" description='Description' tags={['React', 'Node', 'Humply Dumply', 'Long Tags Woooo']} />
          </Masonry>
        </main>
        <div id='sidebar'>Sidebar</div>
      </div>
    </div>
  )
}

export default Posts;
