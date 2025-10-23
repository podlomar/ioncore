import { JSX } from "react";
import { Layout } from "../../components/Layout/index.js";
import { Container } from "../../components/Container/index.js";

export const HomePage = (): JSX.Element => {
  return (
    <Layout title="Home Page">
      <Container>
        <h1>Home Page</h1>
      </Container>
    </Layout>
  );
};
