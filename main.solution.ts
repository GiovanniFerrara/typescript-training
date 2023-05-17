function saluta(nome: string): string {
  return "Ciao, " + nome;
}

type DettagliLibro = {
  titolo: string;
  autore: string;
};

function dettagliLibro(libro: DettagliLibro): string {
  return libro.titolo + " scritto da " + libro.autore;
}

// ----------------------------------------------

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();
  return posts;
}


async function fetchPost(id: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await response.json();
  return post;
}


interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}


async function fetchComments(postId: number): Promise<Comment[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  const comments: Comment[] = await response.json();
  return comments;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  // Qui potresti aggiungere altre proprietà in base alla risposta dell'API
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await response.json();
  return user;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: Comment[]; // Aggiungiamo un campo opzionale per i commenti
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function mapCommentsToPosts(posts: Post[], comments: Comment[]): Post[] {
  // Mappiamo ogni post all'oggetto post originale esteso con i commenti correlati
  return posts.map(post => ({
    ...post,
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}
