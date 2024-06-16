import { Button, Frog, parseEther } from "frog";
import { devtools } from "frog/dev";

export const app = new Frog({});

app.frame("/", (c) => {
  return c.res({
    image: <div>hello world</div>,
    intents: [<Button.Transaction target="/submit">Submit</Button.Transaction>],
  });
});

app.transaction("/submit", (c) => {
  return c.contract({
    abi: [
      {
        type: "function",
        name: "myFunc",
        inputs: [],
        outputs: [],
        constant: false,
        payable: false,
      },
    ],
    functionName: "myFunc",
    args: [
      /* ... */
    ],
    chainId: "eip155:1",
    to: undefined as unknown as `0x${string}`,
    value: parseEther("0"),
  });
});

devtools(app);
