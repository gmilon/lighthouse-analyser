#!/usr/bin/env ts-node
import {getAllLighthouseScore} from "./lighthouse";

function main() {
    getAllLighthouseScore().then((res) => {
        console.log(res)
        console.log('DONE')
    })
}

main()
