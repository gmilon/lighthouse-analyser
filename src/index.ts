#!/usr/bin/env ts-node
import { saveResultToGoogleSheet } from "./googleSheet";
import { getAllLighthouseScore } from "./lighthouse";

function main() {
  getAllLighthouseScore().then((res) => {
    saveResultToGoogleSheet(res).then((savedData)=>{
        console.log(res);
        console.log("DONE");
    });
  });
}

main();
