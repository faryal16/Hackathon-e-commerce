import Link from "next/link";

const AdminNav = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white p-4 space-y-4">
      <h2 className="text-lg font-bold">Admin Dashboard</h2>
      <ul>
        <li>
          <Link href="/admin/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/admin/orders" className="block py-2 px-4 rounded hover:bg-gray-700">
            Orders
          </Link>
        </li>
        <li>
          <Link href="/admin/products" className="block py-2 px-4 rounded hover:bg-gray-700">
            Products
          </Link>
        </li>
        <li>
          <Link href="/admin/users" className="block py-2 px-4 rounded hover:bg-gray-700">
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
