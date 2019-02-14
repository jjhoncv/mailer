let url = "http://localhost:3030/login";

export function ServiceLogin(user: string, password: string) {
  return fetch(url, { method: "post" })
    .then(res => res.json())
}