const ids = new Set(["hi", "from", "nepal"]);
ids.add(2); //to add to set. no duplicates tho
if (ids.has("hi")) {
  ids.delete("hi");
}

for (const entry of ids.entries()) {
  //to got through a set
  console.log(entry[0]); //[0] makes it so the values are printed only once
}
