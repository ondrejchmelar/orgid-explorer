import React from 'react';
import {
  Container, Button,
} from '@windingtree/wt-ui-react';
import { LinkContainer } from 'react-router-bootstrap';

const { PUBLIC_URL } = process.env;

const Page404 = () => ( 
  <main id="app-content" className="content-error bg-grad-up" style={{height: '100vh'}}>
    <article className="app-section d-flex align-items-center">
      <Container>
        <div className="py-1 py-md-5 text-center">
          <h1 className="mb-1 text-white">Oops... 404</h1>
          <p className="mb-2 lead text-white">That is not the page you are looking for.</p>
          <LinkContainer to={`${PUBLIC_URL}/`} >
            <Button variant="primary">Go to main</Button>
          </LinkContainer>
        </div>
      </Container>
    </article>
  </main>
);

export default Page404;
