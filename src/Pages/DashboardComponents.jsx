import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'https://hameau-des-jeunes-backend.vercel.app';

// AdminLogin Component
export function AdminLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        username,
        password,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem('authToken', token);
        onLoginSuccess?.(); // optional callback
        navigate('/dashboard'); // redirect to dashboard
      } else {
        throw new Error('Token not received from server');
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || 'Login failed';
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-24 p-6 bg-bg rounded shadow-lg text-primary">
      <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
      {error && <p className="mb-4 text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1 font-medium">Username</label>
          <input
            id="username"
            type="text"
            required
            value={username}
            disabled={loading}
            onChange={e => setUsername(e.target.value)}
            className="w-full border border-secondary p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            disabled={loading}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-secondary p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-bg py-2 rounded hover:bg-primary/90 transition disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

// ImageUploader Component - multiple images upload
export function ImageUploader() {
  const [images, setImages] = useState([]); // local preview before upload
  const [gallery, setGallery] = useState([]); // images already uploaded
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGallery();
  }, []);

  async function fetchGallery() {
    try {
      const token = localStorage.getItem('authToken');
      const res = await axios.get(`${BASE_URL}/images`);
      setGallery(res.data);
    } catch (err) {
      console.error('Failed to fetch gallery:', err);
    }
  }

  function handleChange(e) {
    const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'));
    const newImages = files.map(file => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages(prev => [...prev, ...newImages]);
    setSuccess('');
    setError('');
  }

  function removeImage(index) {
    setImages(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].url);
      updated.splice(index, 1);
      return updated;
    });
  }

  async function handleUpload() {
    if (images.length === 0) {
      setError('No images selected to upload.');
      return;
    }

    try {
      setUploading(true);
      setError('');
      setSuccess('');

      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('You must be logged in to upload images.');

      const formData = new FormData();
      images.forEach((img) => {
        formData.append('images', img.file);
      });

      await axios.post(`${BASE_URL}/images/upload`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess('Images uploaded successfully!');
      setImages([]);
      fetchGallery();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to upload images');
    } finally {
      setUploading(false);
    }
  }

  async function deleteUploadedImage(id) {
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`${BASE_URL}/images/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGallery(prev => prev.filter(img => img._id !== id));
      alert("Image deleted successfully");
    } catch (err) {
      console.error('Delete failed:', err);
    }
  }

  return (
    <section className="max-w-5xl mx-auto p-6 bg-bg rounded shadow-md mt-6 text-primary">
      <h3 className="text-xl font-semibold mb-4">Gallery Image Upload</h3>

      {error && <p className="text-red-600 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        className="mb-4 block text-primary"
      />

      {images.length > 0 && (
        <>
          <h4 className="mb-2 text-lg">Preview Before Upload</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            {images.map((img, i) => (
              <div key={i} className="relative rounded overflow-hidden border border-secondary">
                <img
                  src={img.url}
                  alt={`preview-${i}`}
                  className="object-cover w-full h-32"
                />
                <button
                  className="absolute top-1 right-1 bg-primary text-bg rounded-full p-1 hover:bg-primary/90"
                  onClick={() => removeImage(i)}
                  aria-label="Remove image"
                  type="button"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleUpload}
            className="bg-primary text-bg py-2 px-6 rounded hover:bg-primary/90 transition"
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload Images'}
          </button>
        </>
      )}

      <div className="mt-8">
        <h4 className="text-lg mb-2">Uploaded Gallery</h4>
        {gallery.length === 0 ? (
          <p className="text-secondary">No uploaded images found</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {gallery.map((img) => (
              <div key={img._id} className="relative rounded overflow-hidden border border-secondary">
                <img
                  src={`${img.url}`}
                  alt="uploaded"
                  className="object-cover w-full h-32"
                />
                <button
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 w-[40px] h-[40px] hover:bg-red-500"
                  onClick={() => deleteUploadedImage(img._id)}
                  aria-label="Delete uploaded image"
                  type="button"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// BlogForm Component
export function BlogForm({ onBlogPosted }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if (image) formData.append('image', image);

      const token = localStorage.getItem('authToken');

      await axios.post(`${BASE_URL}/blogs`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage('Blog post created!');
      setTitle('');
      setContent('');
      setImage(null);
      setPreview('');
      onBlogPosted?.();
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to create blog post');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <h1 className='text-primary font-bold text-xl'>Create a new blog post here</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2 border border-secondary rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full p-2 border border-secondary rounded h-32"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block"
      />
      {preview && <img src={preview} alt="Preview" className="h-32 rounded" />}
      <button
        type="submit"
        disabled={uploading}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
      >
        {uploading ? 'Submitting...' : 'Submit'}
      </button>
      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
}

// Modal Component for updating blog posts
function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-bg rounded shadow-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-primary text-xl font-bold hover:text-red-600"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

// BlogList Component with Update/Delete
export function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editPost, setEditPost] = useState(null); // Post being edited

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/blogs`);
      setPosts(res.data);
      console.log(res.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch blog posts.');
    } finally {
      setLoading(false);
    }
  }

  async function deletePost(id) {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`${BASE_URL}/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(posts.filter(post => post._id !== id));
    } catch (err) {
      alert('Failed to delete post');
      console.log(err);
    }
  }

  function openEditModal(post) {
    setEditPost(post);
  }

  function closeModal() {
    setEditPost(null);
  }

  async function updatePost(id, updatedData) {
    try {
      const token = localStorage.getItem('authToken');
      const formData = new FormData();
      formData.append('title', updatedData.title);
      formData.append('content', updatedData.content);
      if (updatedData.image instanceof File) {
        formData.append('image', updatedData.image);
      }

      await axios.put(`${BASE_URL}/blogs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      await fetchPosts();
      closeModal();
    } catch (err) {
      alert('Failed to update post');
    }
  }

  return (
    <section className="max-w-6xl mx-auto p-6 bg-bg rounded shadow-md mt-6 text-primary">
      <h3 className="text-xl font-semibold mb-4">Blog Posts</h3>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-secondary">No blog posts available.</p>
      ) : (
        <div className="flex flex-row flex-wrap gap-[20px] justify-center items-center w-full h-auto ">
          {posts.map(post => (
            <article key={post._id} className="border border-secondary rounded relative w-[400px] flex flex-col max-h-[800px] p-2">
                <div style={{backgroundImage : `url(${post.imageUrl})`}} alt={post.title} className="w-full h-[400px] max-h-[400px] bg-center bg-cover "></div>
                <div>
                    <h4 className="text-xl font-bold ">{post.title}</h4>
                    <p className="text-sm text-gray-600  mb-2">{new Date(post.createdAt).toLocaleDateString()}</p>
                    <p className="text-base whitespace-pre-wrap mb-4 ">{post.content}</p>
                    <div className="flex gap-3">
                        <button
                        onClick={() => openEditModal(post)}
                        className="bg-yellow-400 text-primary px-4 py-2 rounded hover:bg-yellow-500 transition"
                        >
                        Update
                        </button>
                        <button
                        onClick={() => deletePost(post._id)}
                        className="bg-red-600 text-bg px-4 py-2 rounded hover:bg-red-700 transition"
                        >
                        Delete
                        </button>
                    </div>
                </div>
            </article>
          ))}
        </div>
      )}
      {editPost && (
        <Modal onClose={closeModal}>
          <BlogUpdateForm post={editPost} onUpdate={updatePost} onCancel={closeModal} />
        </Modal>
      )}
    </section>
  );
}

// BlogUpdateForm Component inside modal
function BlogUpdateForm({ post, onUpdate, onCancel }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(post.imageUrl || '');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await onUpdate(post._id, { title, content, image });
    } catch (err) {
      setError('Failed to update post.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Update Blog Post</h2>
      {error && <p className="text-red-600">{error}</p>}
      <input
        type="text"
        className="w-full p-2 border border-secondary rounded"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full p-2 border border-secondary rounded h-28"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <img src={preview} alt="Preview" className="h-32 rounded mt-2 object-cover w-full" />
      )}
      <div className="flex justify-end gap-4 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-secondary text-primary px-4 py-2 rounded hover:bg-secondary/80 transition"
          disabled={submitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="bg-primary text-bg px-4 py-2 rounded hover:bg-primary/90 transition"
        >
          {submitting ? 'Updating...' : 'Update'}
        </button>
      </div>
    </form>
  );
}

// Dashboard Main Component
export default function Dashboard() {
  const [token, setToken] = useState(() => localStorage.getItem('authToken'));
  const [view, setView] = useState('gallery'); // 'gallery' | 'blog' | 'list'

  function handleLogout() {
    localStorage.removeItem('authToken');
    setToken(null);
  }

  function handleLoginSuccess() {
    const storedToken = localStorage.getItem('authToken');
    setToken(storedToken);
  }

  if (!token) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <>
      <header className="bg-bg shadow-md flex justify-between items-center p-4 sticky top-0 z-10 text-primary">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-primary text-bg px-4 py-2 rounded hover:bg-primary/90 transition"
        >
          Logout
        </button>
      </header>

      <nav className="flex justify-center gap-4 mt-6 text-primary flex-wrap">
        <button
          onClick={() => setView('gallery')}
          className={`px-4 py-2 rounded font-semibold ${
            view === 'gallery'
              ? 'bg-primary text-bg'
              : 'border border-primary text-primary hover:bg-secondary'
          }`}
        >
          Upload Gallery Images
        </button>
        <button
          onClick={() => setView('blog')}
          className={`px-4 py-2 rounded font-semibold ${
            view === 'blog'
              ? 'bg-primary text-bg'
              : 'border border-primary text-primary hover:bg-secondary'
          }`}
        >
          Insert Blog Post
        </button>
        <button
          onClick={() => setView('list')}
          className={`px-4 py-2 rounded font-semibold ${
            view === 'list'
              ? 'bg-primary text-bg'
              : 'border border-primary text-primary hover:bg-secondary'
          }`}
        >
          View Blog Posts
        </button>
      </nav>

      <main className="p-6 max-w-6xl mx-auto">
        {view === 'gallery' && <ImageUploader />}
        {view === 'blog' && <BlogForm onBlogPosted={() => setView('list')} />}
        {view === 'list' && <BlogList />}
      </main>
    </>
  );
}

