// const base = 2;
// function basis(N) {
//   return 3 * N;
// }
// function extra(N) {
//   return 5 * N;
// }

// let rate = 1;
// let amt = base;
// let calc = 2 * basis(amt) + extra(amt) * 1.05;
// let points = null;

// const ONTARIO_RATE = 1.1;
// const QUEBEC_RATE = 2.5;
// const ALBERTA_RATE = 10;

function testing(province) {
  //   if (province == "ONTARIO") {
  //     rate = ONTARIO_RATE;
  //     amt = base * ONTARIO_RATE;
  //     calc = 2 * basis(amt) + extra(amt) * 1.05;
  //     return console.log("ONTARIO", rate, amt, calc, points);
  //   } else if (province == "QUEBEC" || province == "ALBERTA") {
  //     rate = province == "QUEBEC" ? QUEBEC_RATE : ALBERTA_RATE;
  //     amt = base * rate;
  //     calc = 2 * basis(amt) + extra(amt) * 1.05;
  //     if (province == "QUEBEC") {
  //       points = 2;
  //       return console.log("QUEBEC", rate, amt, calc, points);
  //     }
  //   } else {
  //     rate = 1;
  //     amt = base;
  //     calc = 2 * basis(amt) + extra(amt) * 1.05;
  //     return console.log("other", rate, amt, calc, points);
  //   }
  // -------------------------------------------------------------- //
  //   rate = 1;
  //   amt = base;
  //   calc = 2 * basis(amt) + extra(amt) * 1.05;
  //   if (province == "ONTARIO") {
  //     rate = ONTARIO_RATE;
  //     amt = base * ONTARIO_RATE;
  //     return console.log("ONTARIO", rate, amt, calc, points);
  //   } else if (province == "QUEBEC" || province == "ALBERTA") {
  //     rate = province == "QUEBEC" ? QUEBEC_RATE : ALBERTA_RATE;
  //     amt = base * rate;

  //     if (province == "QUEBEC") {
  //       points = 2;
  //     }
  //     return console.log(
  //       province == "QUEBEC" ? "QUEBEC" : "ALBERTA",
  //       rate,
  //       amt,
  //       calc,
  //       points
  //     );
  //   }
  //   return console.log("other", rate, amt, calc, points);

  // -------------------------------------------------------------- //
  rate = 1;
  amt = base;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
  if (province == "ONTARIO" || province == "QUEBEC" || province == "ALBERTA") {
    rate =
      province == "ONTARIO"
        ? ONTARIO_RATE
        : province == "QUEBEC"
        ? QUEBEC_RATE
        : ALBERTA_RATE;
    amt = province == "ONTARIO" ? base * ONTARIO_RATE : base * rate;
    if (province == "QUEBEC") {
      points = 2;
    }
    // return console.log(
    //   province == "ONTARIO"
    //     ? "ONTARIO"
    //     : province == "QUEBEC"
    //     ? "QUEBEC"
    //     : "ALBERTA",
    //   rate,
    //   amt,
    //   calc,
    //   points
    // );
  }
  //   return console.log("other", rate, amt, calc, points);
}
// testing("QUEBEC");
// testing("ONTARIO");

// testing("HAHA");
// testing("ALBERTA");
