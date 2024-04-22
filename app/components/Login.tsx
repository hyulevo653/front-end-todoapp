'use client'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
 
export default function Login() {
  const router = useRouter()
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>,url = '', data = {}) {
    const response = await fetch('http://localhost:7000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Các headers khác nếu cần
        },
        body: JSON.stringify(data), // Chuyển đổi dữ liệu thành chuỗi JSON
      });
    
      // Kiểm tra xem có lỗi không
    //   if (!response.ok) {
    //     const errorMessage = `Error ${response.status}: ${response.statusText}`;
    //     throw new Error(errorMessage);
    //   }
      console.log(response.body);
      // Trả về dữ liệu từ phản hồi
    //   return await response.json();
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}