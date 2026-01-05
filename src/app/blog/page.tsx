import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
  absolute: "Blog",
},
};

export default async function Second() {
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("delay")
    },1000);
  })
  return <h1>My Blog First page</h1>;
}
