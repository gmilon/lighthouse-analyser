#!/usr/bin/env ts-node
import {getAllLighthouseScore} from "./lighthouse";

function main() {
    getAllLighthouseScore().then(() => {
        console.log('DONE')
    })
}

main()
