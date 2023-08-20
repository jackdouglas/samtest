export const handler = async (event) => {

  const body = /*html*/`<!DOCTYPE html><html><body><p>Hello World</p></body></html>`

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html; charset=UTF-8' },
    body: '<!DOCTYPE html><html><body><p>Hello World</p></body></html>',
  };

};