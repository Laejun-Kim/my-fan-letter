// console.log(new Date().toLocaleString("ko-KR"));
// console.log(new Date().toISOString());
// console.log(new Date());

//"createdAt": "2023-11-02T16:06:34.150Z"

// let date = new Date();
// console.log(date);

let formattedDate = new Intl.DateTimeFormat("ko-KR", {
  dateStyle: "full",
  timeStyle: "short",
}).format(new Date());
console.log(typeof formattedDate);
