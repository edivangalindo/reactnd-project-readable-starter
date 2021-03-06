import React from 'react';
import { Route } from 'react-router-dom';

import Categories from './Categories/Categories';
import CategoryPosts from './Categories/CategoryPosts';
import AllBlogPost from './Posts/AllBlogPost';
import PostDetail from './Posts/PostDetail';

const Main = () => (
  <div>
    <Route
      exact
      path="/"
      render={() => (
        <div>
          <Categories />
          <AllBlogPost />
        </div>
      )}
    />
    <Route exact path="/:category" component={CategoryPosts} />
    <Route exact path="/:category/:postId" component={PostDetail} />
  </div>
);

export default Main;
