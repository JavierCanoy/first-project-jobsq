export default function data() {
  fetch(`${process.env.NEXT_PUBLIC_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}
