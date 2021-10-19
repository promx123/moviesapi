const  API = "https://api.themoviedb.org/3"

export function get(path){
   return fetch( API + path ,{
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTUxNjFmZjUyZDAzOTkzMzk4YTZhNmE0N2FlZjJhOCIsInN1YiI6IjYxNmM0N2MwYTA5N2RjMDA0MjYwMWFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EdUxQ4wEFj45dWZhkO_D6Bx7z93MTktvVm5--dFq7yg",
          "Content-Type" : "application/json;charset=utf-8  "
        },
      }).then(result => result.json())
}