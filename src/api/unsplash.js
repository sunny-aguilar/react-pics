import axios from "axios";
// create a customizable instance for a particular URL and export
// it back to App.js

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3URMeY4GVY4fzD7bRp7GSTO9qyACuFzNosZC6N-MvWo",
  },
});
