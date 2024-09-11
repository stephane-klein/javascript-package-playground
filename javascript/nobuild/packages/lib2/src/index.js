import { add } from 'lib1';

export default function multiply(a, b) {
    let accumulator = 0;

    for (let i=0; i < b ; i++) {
        accumulator = add(accumulator, a);
    }

    return accumulator;
}
