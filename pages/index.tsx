import { Container, Slider, Typography } from "@mui/material";
import Head from "next/head";

import Copyright from "../components/Copyright";
import PopoverMenu from "../components/PopoverMenu";
import ProTip from "../components/ProTip";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth="sm">
          <div className="my-10">
            <Typography variant="h4" component="h1" gutterBottom>
              NextJS + Tailwind CSS example
            </Typography>
            <Slider
              className="my-4"
              defaultValue={30}
              classes={{ active: "shadow-none" }}
              slotProps={{ thumb: { className: "hover:shadow-none" } }}
            />
            <PopoverMenu />
            <ProTip />
            <Copyright />
          </div>
        </Container>
      </main>
    </>
  );
}
