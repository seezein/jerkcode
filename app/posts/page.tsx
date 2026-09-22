import Link from "next/link";

const posts = [
  { id: "1", title: "Первый пост" },
  { id: "2", title: "Второй пост" },
  { id: "3", title: "Третий пост" },
];

export default function PostsPage() {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ margin: "8px 0" }}>
            <Link 
              href={`/posts/${post.id}`} 
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <Link href="/" style={{ color: "gray" }}>
          ← На главную
        </Link>
      </div>
    </div>
  );
}