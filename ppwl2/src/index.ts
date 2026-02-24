import { Elysia } from "elysia";
//Elysia adalah framework web untuk TypeScript yang dibangun di atas Bun. Elysia fokus kepada backend yang memiliki beberapa fitur, yaitu: 
//1. Type Safety
//2. Plugin Architecture
//3. Performance
//4. Developer Experience
//5. Documentation


const app = new Elysia().listen(3000);
app.get("/", () => "Hello Elysia");
console.log(`🦊 Elysia running at http://localhost:${app.server?.port}`);

app.get("/hello/:name", ({ params }) => {
  return {
    message: `Hallo ${params.name}!`
  };
});

app.post("/login", ({ body }) => {
  const { email, password } = body as {
    email: string;
    password: string;
  };


  return {
    success: true,
    email
  };
});


