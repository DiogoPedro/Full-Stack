/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
let strings2 = ["Hello", "98052", "101"];
// Validators to use
let validators2: { [s: string]: Validation.StringValidator } = {};
validators2["ZIP code"] = new Validation.ZipCodeValidator();
validators2["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings2) {
  for (let name in validators2) {
    console.log(
      `"${s}" - ${
        validators2[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
}