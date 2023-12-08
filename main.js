import { runSequence } from "./shared/sequenceRunner.js";

const emptySequence = [
    "sketches/example-sequence-empty-1",
    "sketches/example-sequence-empty-2",
]

const exampleSequence = [
    "sketches/dalia-day1",
    "sketches/dalia-day2",
    "sketches/dalia-day3",
    "sketches/dalia-day4"
]

runSequence(exampleSequence)