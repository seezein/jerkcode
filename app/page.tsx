import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Мой первый проект на Next.js</h1>
      <p>Выполнил: Пухаев А., группа ИС-24</p>
      
      <div style={{ marginTop: "20px" }}>
        <Link href="/about" style={{ color: "blue", textDecoration: "underline" }}>
          Обо мне
        </Link>
      </div>
    </main>
  );
}