import { serve } from "bun";
import { increment, getCounter } from "./counter";

serve({
  port: 3000,
  fetch() {
    increment();
    return new Response(`Counter: ${getCounter()}`);
  },
});

console.log("Listening on http://localhost:3000");
