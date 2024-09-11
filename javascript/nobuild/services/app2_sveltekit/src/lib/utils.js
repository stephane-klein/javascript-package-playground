import lib1 from 'lib1';
import multiply from 'lib2';

export default function() {
    return lib1.add(1, 2) + multiply(2, 8);
}
