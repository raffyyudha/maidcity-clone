'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import type { BiodataWorker } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Edit, Trash2, LogOut, User } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [workers, setWorkers] = useState<BiodataWorker[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkAuth();
    fetchWorkers();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
    } else {
      setUser(session.user);
    }
  };

  const fetchWorkers = async () => {
    try {
      const { data, error } = await supabase
        .from('biodata_workers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWorkers(data || []);
    } catch (error) {
      console.error('Error fetching workers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this worker biodata?')) return;

    try {
      const { error } = await supabase
        .from('biodata_workers')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Refresh list
      fetchWorkers();
      alert('Worker biodata deleted successfully!');
    } catch (error: any) {
      alert('Error deleting worker: ' + error.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FB4D66] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.avif"
                alt="Sweet Home Logo"
                width={120}
                height={48}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Manage Worker Biodatas</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User size={16} />
                <span>{user?.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Worker Biodatas</h2>
            <p className="text-gray-600 mt-1">Total: {workers.length} workers</p>
          </div>
          <Link
            href="/admin/dashboard/add"
            className="flex items-center gap-2 bg-[#FB4D66] text-white px-6 py-3 rounded-lg hover:bg-[#d43940] transition font-semibold"
          >
            <Plus size={20} />
            Add New Worker
          </Link>
        </div>

        {/* Workers Grid */}
        {workers.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="text-gray-400 mb-4">
              <User size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Workers Yet</h3>
            <p className="text-gray-600 mb-6">Start by adding your first worker biodata</p>
            <Link
              href="/admin/dashboard/add"
              className="inline-flex items-center gap-2 bg-[#FB4D66] text-white px-6 py-3 rounded-lg hover:bg-[#d43940] transition"
            >
              <Plus size={20} />
              Add New Worker
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workers.map((worker) => (
              <div key={worker.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="aspect-square relative bg-gray-200">
                  {worker.photo_url ? (
                    <Image
                      src={worker.photo_url}
                      alt={worker.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <User size={64} className="text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{worker.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{worker.nationality} • {worker.age} years old</p>
                  <div className="flex gap-2 mt-4">
                    <Link
                      href={`/admin/dashboard/edit/${worker.id}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
                    >
                      <Edit size={16} />
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(worker.id)}
                      className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
