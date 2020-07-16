import axios from "axios";

export default axios.create({
  // create a customizable instance for a particular URL
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3URMeY4GVY4fzD7bRp7GSTO9qyACuFzNosZC6N-MvWo",
  },
});