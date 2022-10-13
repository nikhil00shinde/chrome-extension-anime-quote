async function fetchData() {
  const res=await fetch ("https://animechan.vercel.app/api/random");
  const data=await res.json();
  console.log(data.anime);
  document.querySelector(".card").innerHTML = `
  <div class="card-body">
        <h5 class="card-title mb-1">${data.anime}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.character}</h6>
        <p class="card-text">${data.quote}</p>
 </div>
      `;
}
fetchData();