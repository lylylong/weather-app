function foobar(N) {
  if (N % 14 === 0) {
    return console.log("foobar");
  } else if (N % 2 === 0) {
    return console.log("foo");
  } else if (N % 7 === 0) {
    return console.log("bar");
  } else {
    return console.log(N);
  }
}
foobar(2); // => foo
foobar(5); // => 5
foobar(7); // => bar
foobar(14); // => foobar
foobar(21); // => bar
foobar(28); // => foobar
foobar(51); // => 51
