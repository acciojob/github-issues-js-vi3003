//your code here
let main = document.querySelector("main");
let pageNumberHere = 1;

let getIssue = () => {
    console.log(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`);
  fetch(
    `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`
  )
    .then((res) => res.json())
    .then((data) => displayIssue(data))
    .catch((err) => console.log(err));
};
getIssue();

let displayIssue = (data) => {
    main.innerHTML="";
    let pageNum = document.createElement("p");
    pageNum.textContent = `Page number ${pageNumberHere}`;
    let prev = document.createElement("button");
    prev.textContent = "Previous Page";
    prev.id="load_prev";
    let next = document.createElement("button");
    next.textContent = "Next Page";
    next.id="load_next"
    let ol=document.createElement("ol");

  data.map((issue) => {
    let li=document.createElement("li");
    li.textContent=issue.url;
    ol.append(li);
  });

  main.append(pageNum,ol,prev, next);
    prev.addEventListener("click", () => {
        if(pageNumberHere>1){
            pageNumberHere--;
            getIssue();
        }
    });
    next.addEventListener("click", () => {
      pageNumberHere++;
      getIssue();
    });
};