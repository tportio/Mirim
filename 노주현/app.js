const GRAPHQL_URL = 'http://localhost:4000/';

async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          movies {
              title
              rating
          }
        }
      `,
    }),
  });
  const responseBody = await response.json();
  console.log(responseBody);
}

fetchGreeting()