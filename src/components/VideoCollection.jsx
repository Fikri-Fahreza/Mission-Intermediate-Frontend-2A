import React, { useState, useEffect } from 'react';
import avatar from '../assets/fikri.jpg';
import img1 from '../assets/Rectangle 2.png';
import img2 from '../assets/Rectangle 3.png';
import img3 from '../assets/Rectangle 4.png';
import img4 from '../assets/Rectangle 6.png';
import img5 from '../assets/Rectangle 7.png';
import img6 from '../assets/Rectangle 8.png';
import img7 from '../assets/Rectangle 22957.png';

const VideoCollection = () => {
  // Array object untuk get, add, update, dan delete data
  const [videos, setVideos] = useState(() => {
    const savedVideos = localStorage.getItem('videos');
    return savedVideos ? JSON.parse(savedVideos) : [
      { id: 1, img: img1, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
      { id: 2, img: img2, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
      { id: 3, img: img3, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
      { id: 4, img: img4, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
      { id: 5, img: img5, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
      { id: 6, img: img6, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
      { id: 7, img: img2, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
      { id: 8, img: img1, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
      { id: 9, img: img7, title: 'Big 4 Auditor Financial Analyst', rating: 3.5, reviews: 86, price: 'Rp 300K' },
    ];
  });

  // useStae untuk get, add, update, dan delete data
  const [newVideo, setNewVideo] = useState({ title: '', price: '' });
  const [editVideo, setEditVideo] = useState(null);

  // UseEffect untuk localStorage
  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

  // function untuk menambahkan card video
  const addVideo = () => {
    if (newVideo.title.trim() === '' || newVideo.price.trim() === '') return;
    const newId = videos.length ? videos[videos.length - 1].id + 1 : 1;
    setVideos([
      ...videos,
      {
        id: newId,
        img: img1, 
        title: newVideo.title,
        rating: 3.5, 
        reviews: 0, 
        price: newVideo.price,
      },
    ]);
    setNewVideo({ title: '', price: '' });
  };

  // function untuk menghapus card video
  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  // function untuk mengedit card video
  const startEdit = (video) => {
    setEditVideo(video);
    setNewVideo({ title: video.title, price: video.price });
  };

  // function untuk mengupdate card video
  const updateVideo = () => {
    if (newVideo.title.trim() === '' || newVideo.price.trim() === '') return;
    setVideos(
      videos.map((video) =>
        video.id === editVideo.id ? { ...video, title: newVideo.title, price: newVideo.price } : video
      )
    );
    setNewVideo({ title: '', price: '' });
    setEditVideo(null);
  };

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Koleksi Video Pembelajaran Unggulan</h2>
        <p className="text-gray-600 mt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        <div className="flex gap-6 mt-6 text-gray-500 text-lg font-medium">
          <span className="text-orange-500 relative cursor-pointer">
            Semua Kelas
            <div className="w-8 h-1 bg-orange-500 absolute left-0 -bottom-1 rounded-full"></div>
          </span>
          <span className="cursor-pointer hover:text-gray-900">Pemasaran</span>
          <span className="cursor-pointer hover:text-gray-900">Desain</span>
          <span className="cursor-pointer hover:text-gray-900">Pengembangan Diri</span>
          <span className="cursor-pointer hover:text-gray-900">Bisnis</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{editVideo ? 'Edit Video' : 'Tambah Video Baru'}</h3>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Judul Video"
            value={newVideo.title}
            onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
            className="border rounded-md p-2 w-full"
          />
          <input
            type="text"
            placeholder="Harga (contoh: Rp 300K)"
            value={newVideo.price}
            onChange={(e) => setNewVideo({ ...newVideo, price: e.target.value })}
            className="border rounded-md p-2 w-full"
          />
          {editVideo ? (
            <button
              onClick={updateVideo}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Update
            </button>
          ) : (
            <button
              onClick={addVideo}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Tambah
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={video.img} className="rounded-md w-full mb-2" alt={video.title} />
            <h4 className="font-semibold text-gray-800">{video.title}</h4>
            <p className="text-gray-500 text-sm line-clamp-2">
              Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center gap-3 bg-white py-4 w-full justify-start">
              <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-md" />
              <div>
                <span className="block font-semibold text-gray-800">Fikri Fahreza</span>
                <span className="text-sm text-gray-500">Fullstack Developer Gojek</span>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < video.rating ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">{video.rating}</span>
                <span className="text-gray-500 text-sm underline">({video.reviews})</span>
              </div>
              <span className="text-green-500 font-bold text-lg">{video.price}</span>
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => startEdit(video)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteVideo(video.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoCollection;