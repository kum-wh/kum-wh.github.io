import { useState } from 'react';

export default function ManualScrollPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const scrollToPage = (page) => {
    const pageHeight = window.innerHeight;
    window.scrollTo({
      top: page * pageHeight,
      behavior: 'smooth'
    });
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(document.body.scrollHeight / window.innerHeight);
    const nextPage = (currentPage + 1) % totalPages;
    setCurrentPage(nextPage);
    scrollToPage(nextPage);
  };

  return (
    <div style={{ height: '100vh' }}>
      {/* Your page sections */}
      <section style={{ height: '100vh', background: '#f0f0f0' }}>
        Page 1 Content
        <button onClick={handleNextPage}>Next Page</button>
      </section>
      <section style={{ height: '100vh', background: '#e0e0e0' }}>
        Page 2 Content
        <button onClick={handleNextPage}>Next Page</button>
      </section>
      <section style={{ height: '100vh', background: '#d0d0d0' }}>
        Page 3 Content
        <button onClick={handleNextPage}>Next Page</button>
      </section>
    </div>
  );
}